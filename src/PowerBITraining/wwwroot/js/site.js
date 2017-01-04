﻿/// <reference path="../executiveusecase7.html" />
/// <reference path="../executiveusecase7.html" />
/// <reference path="../execusecase.html" />
// Write your Javascript code.
/// <reference path="../powerbiimg.html" />
/// <reference path="../modal2.html" />
/// <reference path="../loginsignincontentpack.html"

$(document).ready(function () {
    kyle = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var outerWidth = window.outerWidth;
        var outerHeight = window.outerHeight;
        var r = $('.resize');
        var p = $('.powerbi');
        var rHeight = $('iframe').innerHeight();
        var imgheight = $('.powerbi>img').height();
        $('img.powerbi').width(width * .3);
        if (width > 1300) {
            r.innerWidth(1200);
            r.innerHeight(700);
            p.outerHeight('50%');
            $('.dashboard1').css('margin-left', '-4%');
        }
        else if (width < 1300 && width >= 1100) {
            r.innerWidth(900);
            r.innerHeight(600);
            p.outerHeight('50%');
            $('.dashboard1').css('margin-left', '-3%');
        }
        else if (width < 1110 && width > 650) {
            r.innerWidth(600);
            r.innerHeight(400);
            p.outerHeight('50%');
            $('.dashboard1').css('margin-left', '0%');
        }
        else {
            r.innerWidth(.75 * width);
            r.innerHeight(9 / 16 * width);
            p.outerHeight('90%');
            $('.dashboard1').css('margin-left', '0%');
        }
        $('.focused').height(window.innerHeight * .3).width(window.innerWidth * .3);
    };
    kyle();
    $('.useprofile').click(function () {
        $('.useprofile').removeClass('getProfile');
        $(this).addClass('getProfile');
    });   
    $('.powerbi').html(function () {
        kyle();
        $('body').addClass('loaderCage');
        $('.powerbi').load('powerbiimg.html', function () {
            $('.prevent').removeClass('hide');
            kyle();
           
            setTimeout(function () {
                $('#youtubing').remove();
                $('#loader').removeClass('hide');
            }, 1000);
            setTimeout(function () {

                $('.selectyourprofile').show();
                $('.useprofile').click(function () {
                    $('.useprofile').removeClass('selected');
                    $(this).toggleClass('selected');
                });
                $('#loader').fadeOut(500);


                $('.blaze').click(function () {

                    $('.block').removeClass('hide');
                    $('.prevent').addClass('hide');
                    $('.modalz1').addClass('modalisopen');
                });
                $('.closing').click(function () {

                    $('.modalz1').removeClass('modalisopen').addClass('modalisclosed');
                    $('.yobut').show();
                    $('#shuffle').trigger('click');
                    $('#text').hide();
                    $('.yobut').fadeIn(2000);
                    $('.block').addClass('hide');
                    $('.prevent').addClass('hide');



                });


                $('.blaze').trigger('click', this);
              

                
                       
                     
                    
              
            }, 11000);

        });
    });
    // Begin Non-Sizing Code
    var b = $('.blah');
    var c = $('.closing');
    b.focusin(function () {
        c.addClass('usethisprofile');
    });
    b.focusout(function () {
        c.removeClass('usethisprofile');
    });
    $('.yobut').hide();
    $('.shDash').click(function () {
        $('.focusing').removeClass('hide');
        $('.tabbing').removeClass('hide');
        $('.executiveUseCase').removeClass('hide');
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');

        $('.powerbi').removeClass('hide').removeClass('hide').load('loaderball.html', function () {
            $('.loginvideo').addClass('hide');
            $('.circle').removeClass('hide');
            $('.ballz').addClass('ball');
            $('.textLogin').text("Filters").addClass('goRight');

        });


        setTimeout(function () {
            $('.resize').load('dashboard1.html', function () {
                $('.block').removeClass('hide');
                $('.circle').addClass('hide');
                $('.textLogin').removeClass('goRight');
                $('.ballz').removeClass('ball');
                $('#loader').addClass('knockDown');
                $('.powerbi').addClass('hide');
                $('#loader').fadeIn(1000, function () {
                    $('#loader').fadeOut(500);
                    setTimeout(function () {
                        $('.resize').removeClass('hide');
                        $('.modalz2').addClass('modalisopen');
                        $('.filteringvideo').load('filtering1.html');
                        $('.close2').click(function () {
                            $('.modalz2').removeClass('modalisopen');
                            $('.block').addClass('hide');
                            $('.prevent').addClass('hide');
                            $('.resize.dashboard1').removeClass('hide').fadeIn(5000).show();
                            kyle();
                        });
                    }, 4000);
                });

                $('.dashboard1').show();
                kyle();

            });
        }, 2500);


    });
    $('.getacontentpack').click(function () {
        $('.powerbi').load('getacontentpack1.html', function () {
            $('.shDash').removeClass('hide');
            $('.circle').removeClass('hide');
            $('.prevent').removeClass('hide');
            $('.textLogin').addClass('goRight');
            $('.ballz').addClass('ball');
            $('.loginvideo').hide();
            $('.resize').addClass('hide');
            $('.powerbi').removeClass('hide').show();
            $('.textLogin').text("Content Pack").css('margin-left', '-60% !important');
        });
        setTimeout(function () {
            $('.getpack').removeClass('hide').fadeIn(2100);
            $('.prevent').addClass('hide');
            $('.circle').addClass('hide');
            $('.textLogin').removeClass('goRight');
            $('.ballz').removeClass('ball');

        }, 1800);
        $('body').removeClass('loaderCage');
    });
    $('.focusing').click(function () {
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');
        $('.powerbi').removeClass('hide').removeClass('hide').load('loaderball.html', function () {
            $('.loginvideo').addClass('hide');
            $('.circle').removeClass('hide');
            $('.ballz').addClass('ball');
            $('.textLogin').text("Focusing").addClass('goRight');

        });

        setTimeout(function () {
            $('.block').removeClass('hide');
            $('.circle').addClass('hide');
            $('.textLogin').removeClass('goRight');
            $('.ballz').removeClass('ball');
            $('#loader').addClass('knockDown');
            $('.powerbi').addClass('hide');

            setTimeout(function () {
                $('.modalz3').addClass('modalisopen');
                $('.focusingvideo').load('focusing.html');
                $('.close3').click(function () {
                    $('.modalz3').removeClass('modalisopen');
                    $('.block').addClass('hide');
                    $('.prevent').addClass('hide');
                    $('.resize').removeClass('hide').fadeIn(5000).show();
                    kyle();
                });
            }, 4000);





        }, 2500);
    });
    $('.tabbing').click(function () {
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');
        $('.powerbi').removeClass('hide').removeClass('hide').load('loaderball.html', function () {
            $('.loginvideo').addClass('hide');
            $('.circle').removeClass('hide');
            $('.ballz').addClass('ball');
            $('.textLogin').text("Switching Pages").addClass('goRight');

        });

        setTimeout(function () {
            $('.resize').load('switchingPagesDashboard.html', function () {
                $('.block').removeClass('hide');
                $('.circle').addClass('hide');
                $('.textLogin').removeClass('goRight');
                $('.ballz').removeClass('ball');
                $('#loader').addClass('knockDown');
                $('.powerbi').addClass('hide');
                kyle();
                setTimeout(function () {
                    $('.modalz4').addClass('modalisopen');
                    $('.paginationvideo').load('tabbing.html');
                    $('.close4').click(function () {
                        $('.modalz4').removeClass('modalisopen');
                        $('.block').addClass('hide');
                        $('.prevent').addClass('hide');
                        $('.resize').removeClass('hide').fadeIn(5000).show();
                        kyle();
                    });
                }, 4000);
            });
        }, 2500);
    });
    $('#text').click(function () {
        window.open('http://powerbi.com');
    });
    $('.buttonz').hide();
    $('.buttonz').click(function () {
        $('.buttonz').removeClass('usethisprofile');
        $(this).addClass('usethisprofile');

    });
    kyle();
    $('.hashtag').click(function () {
        $('.prevent').removeClass('hide');
        $('.yobut').remove();
        $('.buttonz').show();
        $('.selectyourprofile').remove();
        var btntext = $('.getProfile').text();
        $('.executiveUseCase').append(btntext);
        $('.block').addClass('hide');
        setTimeout(function () {
            $('.contentpack').trigger('click');
            $('.prevent').addClass('hide');

        }, 1000);
    });
    $('.contentpack').click(function () {

        $('.prevent').removeClass('hide');
        $('.block').addClass('hide');
        $('.powerbi').load('loginsignincontentpack1.html', function () {
            $('.circle').removeClass('hide');
            $('.textLogin').addClass('goRight');
            $('.ballz').addClass('ball');
            $('.resize').addClass('hide');
            $('.powerbi').removeClass('hide').show();
            $('.textLogin').text("Login");
            kyle();
        });

        setTimeout(function () {
     
            $('.loginvideo').removeClass('hide').fadeIn(3000);
            $('.prevent').addClass('hide');
            $('.circle').addClass('hide');
            $('.textLogin').removeClass('goRight');
            $('.ballz').removeClass('ball');
            kyle();

        }, 1800);
        $('body').removeClass('loaderCage');
    });
    $('.mainpage').on('click', function () {
        window.location.href = '/Home/index';
    });
    $(window).resize(function () {
        kyle();
    });
    $('.selectyourprofile').hide();
    $('.back').click(function () {
        $(this).addClass('hide');
        $('.buttonz').addClass('hide');
        $('.six').removeClass('hide');
    });
    $('.executiveUseCase').click(function () {
        $('.buttonz').addClass('hide');
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');
        $('.block').addClass('hide');
        $('.powerbi').removeClass('hide');
        $('.powerbi').load('execusecase.html');
        $('.prevent').addClass('hide');
        $('.executiveUseCase').removeClass('hide');
        $('.executiveUseCaseStep2').removeClass('hide');
        $('.back').removeClass('hide');
        setTimeout(function () {
            $('.powerbi').load('executiveUseCase.html', function () {

                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');
    });
    $('.executiveUseCaseStep2').click(function () {
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');
        $('.block').addClass('hide');
        $('.powerbi').removeClass('hide');
        $('.powerbi').load('execusecase2.html');
        $('.prevent').addClass('hide');
        $('.executiveUseCaseStep3').removeClass('hide');
        setTimeout(function () {
            $('.powerbi').load('executiveUseCase2.html', function () {

                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');


    });
    $('.executiveUseCaseStep3').click(function () {
        visualRemoveClassHide();
        $('.powerbi').load('execusecase3.html');

        $('.executiveUseCaseStep4').removeClass('hide');
        setTimeout(function () {
            $('.powerbi').load('executiveUseCase3.html', function () {
                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');


    });
    $('.executiveUseCaseStep4').click(function () {
        visualRemoveClassHide();
        $('.executiveUseCaseStep5').removeClass('hide');

        setTimeout(function () {
            $('.powerbi').load('executiveUseCase4.html', function () {
                visualAddClassHide();
            });
        }, 50);
        $('body').removeClass('loaderCage');


    });
    $('.executiveUseCaseStep5').click(function () {
        $('.powerbi').load('execusecase5.html')
        visualRemoveClassHide();
        $('.executiveUseCaseStep6').removeClass('hide');

        setTimeout(function () {
            $('.powerbi').load('executiveUseCase5.html', function () {
                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');


    });
    $('.executiveUseCaseStep5').click(function () {
        $('.powerbi').load('execusecase5.html')
        visualRemoveClassHide();
        $('.executiveUseCaseStep6').removeClass('hide');

        setTimeout(function () {
            $('.powerbi').load('executiveUseCase5.html', function () {
                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');


    });

    // COPY THIS CODE HERE
    $('.executiveUseCaseStep6').click(function () {
        $('.powerbi').load('execusecase6.html')
        visualRemoveClassHide();
        $('.executiveUseCaseStep6').removeClass('hide');

        setTimeout(function () {
            $('.powerbi').load('executiveUseCase6.html', function () {
                visualAddClassHide();
            });
        }, 5000);
        $('body').removeClass('loaderCage');


    });
  

  
    visualRemoveClassHide = function () {
        $('.resize').addClass('hide');
        $('.prevent').removeClass('hide');
        $('.block').addClass('hide');
        $('.powerbi').removeClass('hide');

    };
    visualAddClassHide = function () {
        $('.prevent').addClass('hide');
        $('.resize').addClass('hide');
        $('.powerbi').removeClass('hide').show();
        kyle();
    };
    });

