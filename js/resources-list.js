(function ($) {
    var ResourcesList = {

        loading: false,
        wrapperEl: jQuery('body'),
        current_page: 1,
        post_type: 'post',
        taxonomies: {},
        s: '',
        max_num_pages: 1,
        found_posts: 0,
        limit: 12,

        goToNextPage: function () {
            if (this.current_page >= this.max_num_pages) {
                return;
            }
            this.goToPage(1 * this.current_page + 1, false, true);
        },
        goToPrevPage: function () {
            if (this.current_page <= 1) {
                return;
            }
            this.goToPage(this.current_page - 1, false, true);
        },

        goToPage: function (pageNumber, force, needScroll) {

            if (!force && this.current_page == pageNumber) {
                return;
            }
            this.current_page = pageNumber;

            jQuery('.page-item:not(.next):not(.prev)', ResourcesList.wrapperEl).each(function () {
                if (parseInt($(this).text()) == ResourcesList.current_page) {
                    $(this).addClass('_active');
                } else {
                    $(this).removeClass('_active');
                }
            });

            ResourcesList.getList(false, needScroll);
        },

        getList: function (skipPushHistory, needScroll) {

            ResourcesList.loading = true;

            ResourcesList.taxonomies = {};

            $('[data-tax]', ResourcesList.wrapperEl).each(function () {
                var values = [];
                var name = $(this).attr('data-tax');

                $('[value]:checked', $(this)).each(function () {
                    if ($(this).val()) {
                        values.push($(this).attr('value'));
                    }
                });

                if (values.length > 0) {
                    ResourcesList.taxonomies[name] = values;
                }
            });

            var post_types = ResourcesList.wrapperEl.attr('data-post-type');
            var post_types_array = [];

            if ($('[data-url-key="content_type"] [value]:checked', ResourcesList.wrapperEl).length > 0) {

                $('[data-url-key="content_type"] [value]:checked', ResourcesList.wrapperEl).each(function () {
                    post_types_array.push($(this).attr('value'));
                });
            } else {
                post_types_array = post_types.split(',');
            }

            var requestData = {
                action: 'ajax_get_resources_list',
                current_page: ResourcesList.current_page,
                taxonomies: ResourcesList.taxonomies,
                post_type: post_types_array,
                limit: ResourcesList.limit,
            };

            // console.log(requestData)

            jQuery.ajax({
                url: LOCALIZE.ajaxUrl,
                type: 'POST',
                dataType: 'json',
                data: requestData,
                success: function (response) {

                    //  console.log(response)

                    if (response) {
                        ResourcesList.max_num_pages = response.max_num_pages;
                        ResourcesList.found_posts = response.found_posts;

                        jQuery('.search-results-resources', ResourcesList.wrapperEl).html(response.view);

                        if (response.pagination_view) {
                            $('.ajax-list-pagination', ResourcesList.wrapperEl).replaceWith(response.pagination_view);
                        }

                        if (Object.keys(ResourcesList.taxonomies).length > 0 || $('[data-url-key="content_type"] [value]:checked', ResourcesList.wrapperEl).length > 0) {
                            $('.clear-filters', ResourcesList.wrapperEl).addClass('active');
                        } else {
                            $('.clear-filters', ResourcesList.wrapperEl).removeClass('active');
                        }

                        ResourcesList.initSelectedFilters();

                        if (!skipPushHistory) {
                            ResourcesList.pushBrowserHistory();
                        }

                        if (needScroll) {
                            $('html, body').animate({
                                scrollTop: $('.search-results-resources').offset().top - 250
                            }, 500);
                        }

                    }
                },
                error: function (response) {
                    console.warn(response);
                },
                complete: function(){
                    ResourcesList.loading = false;
                }
            });
        },
        initSelectedFilters: function () {

            var selectedFiltersView = '<div class="found-number">' + ResourcesList.found_posts + ' Items Found</div>';

            $('[data-url-key]').each(function () {
                var taxView = '';
                var _key = $(this).attr('data-url-key');
                var filterName = $(this).find('.filter-label').text();

                if (!$('.all-item [type="checkbox"]', $(this)).is(':checked')) {

                    $(':checked', $(this)).each(function () {
                        taxView += '<div class="selected-filter" data-key="' + _key + '" data-value="' + $(this).attr('value') + '">' + $(this).next('label').text() + ' <span class="remove-filter">X</span></div>';
                    });

                    if (taxView) {
                        selectedFiltersView += '<div class="selected-filters-item">';
                        selectedFiltersView += '<b>' + filterName + ':</b> ';

                        selectedFiltersView += taxView;

                        selectedFiltersView += '</div>';
                    }
                } else {
                    selectedFiltersView += '<div class="selected-filters-item">';
                    selectedFiltersView += '<div class="selected-filter" data-key="' + _key + '" data-value=""><b>' + $('[data-url-key="' + _key + '"] .filter-label').text() + ':</b> All <span class="remove-filter">X</span></div>';
                    selectedFiltersView += '</div>';
                }

            });

            $('.selected-filters', this.wrapperEl).html(selectedFiltersView);
            
            if( $('.selected-filter', this.wrapperEl).length > 4 ){
                this.wrapperEl.addClass('many-filters');
            } else {
                this.wrapperEl.removeClass('many-filters');
            }
        },
        init: function (filtersWrapper) {
            this.wrapperEl = filtersWrapper;

            $('form', this.wrapperEl).submit(function (e) {
                e.preventDefault();
            });

            $(document).on('click', '.resources-filter-wrapper .remove-filter', function (e) {
                e.preventDefault();
                var parentEl = $(this).closest('.selected-filter');

                var wrapperTarget = parentEl.attr('data-key');
                var elTarget = parentEl.attr('data-value');

                if (elTarget) {
                    $('[data-url-key="' + wrapperTarget + '"] [value="' + elTarget + '"]').prop('checked', false).removeAttr('checked');
                } else {
                    $('[data-url-key="' + wrapperTarget + '"] [value]').prop('checked', false).removeAttr('checked');
                }
                ResourcesList.goToPage(1, true);
            });

            $(document).on('change', '.resources-filter-wrapper .all-item input', function (e) {

                if(ResourcesList.loading){
                    return;
                }

                e.preventDefault();

                var isChecked = $(this).is(':checked')
                $('input', $(this).closest('[data-url-key]')).each(function () {
                    if (isChecked) {
                        $(this).prop('checked', true).attr('checked', '1');
                    } else {
                        $(this).prop('checked', false).removeAttr('checked');
                    }
                });

            });
            $(document).on('change', '[data-url-key] input', function (e) {

                if(ResourcesList.loading){
                    return;
                }

                if (!$(this).is(':checked')) {
                    $('.all-item input', $(this).closest('[data-url-key]')).prop('checked', false).removeAttr('checked');
                }

                $('.sb-menu').removeClass('active');
                ResourcesList.goToPage(1, true);
            });

            $('.resources-filter-wrapper .apply-filters').click(function (e) {
                e.preventDefault();
                $('.sb-menu').removeClass('active');
                ResourcesList.goToPage(1, true);
            });
            $('.sb-menu').click(function (e) {
	             e.stopPropagation();
            });
            $('body').click(function (e) {
	             $('.resources-filter-wrapper .has-children .active').removeClass('active');
            });

            $(document).on('click', '.ajax-list-pagination .previouspostslink', function (e) {
                e.preventDefault();
                ResourcesList.goToPrevPage();
            });
            $(document).on('click', '.ajax-list-pagination .nextpostslink', function (e) {
                e.preventDefault();
                ResourcesList.goToNextPage();
            });
            $(document).on('click', '.ajax-list-pagination .page', function (e) {
                e.preventDefault();
                ResourcesList.goToPage($(this).text(), false, true);
            });

            $('.clear-filters', ResourcesList.wrapperEl).click(function (e) {
                e.preventDefault();
                $('[data-tax] [value]:checked', ResourcesList.wrapperEl).prop('checked', false).removeAttr('checked');
                $('[data-url-key="content_type"] [value]:checked', ResourcesList.wrapperEl).prop('checked', false).removeAttr('checked');

                $('.sb-menu', ResourcesList.wrapperEl).removeClass('active');

                ResourcesList.goToPage(1, true);
            });

            window.addEventListener("popstate", function (event) {
                if (event && event.state) {
                    ResourcesList.onPopHistory(event.state);
                }
            });

            ResourcesList.loadGetQuery(true);

        },
        loadGetQuery: function (forceGet) {
            var needGetList = forceGet;

            var post_type = this.wrapperEl.attr('data-post-type');

            if (post_type) {
                ResourcesList.post_type = post_type;
            }

            var queryParams = ResourcesList.getQueryParams();
            if (queryParams) {
                for (var key in queryParams) {
                    var urlKeyEl = $('[data-url-key="' + key + '"]');
                    var urlValuesArray = queryParams[key] ? queryParams[key].split(',') : [];

                    if (urlKeyEl.length > 0) {

                        urlValuesArray.forEach(function (urlValue) {
                            var urlValEl = urlKeyEl.find('[data-url-val="' + urlValue + '"]');
                            if (urlValEl.length > 0) {
                                urlValEl.prop('checked', '1').attr('checked', '1');
                            } else {
                                $('[data-url-key="' + key + '"]').val(urlValue);
                            }
                        });
                    }
                }
            }

            $('[data-url-key]').each(function () {
                if ($('li:not(.all-item) [type="checkbox"]', $(this)).length == $('li:not(.all-item) [type="checkbox"]:checked', $(this)).length) {
                    $('.all-item [type="checkbox"]', $(this)).prop('checked', true).attr('checked', '1');
                }
            });


            var initialPage = ResourcesList.getQueryParam('pagenum');
            if (initialPage && initialPage > 1) {
                ResourcesList.goToPage(parseInt(initialPage), true);
                needGetList = false;
            }

            if (needGetList) {
                ResourcesList.getList(true);
            }
        },
        onPopHistory: function (eventState) {
            this.loadGetQuery();
        },
        getQueryParams: function () {
            var params;
            var result = false;

            var search = location.search.substring(1);

            if (search) {
                var params = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
                    return key === "" ? value : decodeURIComponent(value)
                });
            }

            if (params && Object.keys(params).length > 0) {
                result = params;
            }

            return result;
        },
        getQueryParam: function (name, url) {

            url = url ? url : window.location.href;

            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
            if (!results)
                return null;
            if (!results[2])
                return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        pushBrowserHistory: function () {

            var newBrowserHistoryState = {};
            var newBrowserHistoryUrl = location.href.split('?')[0];
            var newBrowserHistoryTitle = $(document).attr('title');

            if (ResourcesList.s.length > 0) {
                newBrowserHistoryState['search'] = ResourcesList.s;
            }
            if (ResourcesList.current_page > 1) {
                newBrowserHistoryState['pagenum'] = ResourcesList.current_page;
            }

            $('[data-url-key]').each(function () {

                var values = [];

                $('[data-url-val]', $(this)).each(function () {
                    if ($(this).is(':checked')) {
                        values.push($(this).attr('value'));
                    }
                });

                if (values.length == 0) {
                    return;
                }

                var _value = values.join(',');

                var urlValEl = $(this).find('[data-url-val][value="' + _value + '"]');
                if (urlValEl.length > 0) {
                    var urlVal = urlValEl.attr('data-url-val');
                    if (urlVal) {
                        _value = urlVal;
                    }
                }

                var _key = $(this).attr('data-url-key');

                if (_key) {
                    newBrowserHistoryState[_key] = _value;
                }
            });

            newBrowserHistoryUrl += this.objToQueryArgs(newBrowserHistoryState);

            history.pushState(newBrowserHistoryState, newBrowserHistoryTitle, newBrowserHistoryUrl);
        },
        objToQueryArgs: function (objectQuery) {

            var newQueryArgsString = '';

            for (var key in objectQuery) {
                if (objectQuery[key]) {
                    if (newQueryArgsString.indexOf('?') > -1) {
                        newQueryArgsString += '&';
                    } else {
                        newQueryArgsString += '?';
                    }
                    newQueryArgsString += key + '=' + objectQuery[key];
                }
            }
            return newQueryArgsString;
        },
    };

    jQuery(document).ready(function () {

        var filtersWrapper = $('.resources-filter-wrapper');
        if (filtersWrapper.length > 0) {
            ResourcesList.init(filtersWrapper);
        }

    });


})(jQuery);