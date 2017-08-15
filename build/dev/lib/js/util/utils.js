"use strict";define(["../../vendor/d3-format.min"],function(e){return{displayLoader:function(e){$(".advanced-analytics-toolsets-"+e).html('\n          <div style="height:100%; width:100%">\n            <p style="position:relative;top:38%" class="qui-pleasewaitdialog-loader-container">\n              <img src="../resources/img/core/loader.svg"/>\n            </p>\n          </div>')},displayConnectionError:function(e){$(".advanced-analytics-toolsets-"+e).html('<div class="requirements-wrapper incomplete"><div class="requirements"><p class="incomplete-text">Error occured when retrieveing data from R.</p></div></div>')},getDefaultPaletteColor:function(){return["176,175,174","123,122,120","84,83,82","68,119,170","125,184,218","182,215,234","70,198,70","249,63,23","255,207,2","39,110,39","255,255,255","0,0,0"]},getTwelveColors:function(){return["51,34,136","102,153,204","136,204,238","68,170,153","17,119,51","153,153,51","221,204,119","102,17,0","204,102,119","170,68,102","136,34,85","170,68,153"]},getOneHundredColors:function(){return["153,200,103","228,60,208","226,64,42","102,168,219","63,26,32","229,170,135","60,107,89","170,42,107","233,176,46","120,100,221","101,233,60","92,228,186","208,224,218","215,150,22","100,72,123","228,231,43","111,115,48","147,40,52","174,108,125","152,103,23","227,203,112","64,140,29","221,50,95","83,61,28","42,60,84","219,113,39","114,227,226","226,193,218","212,117,85","125,127,129","84,174,155","233,218,166","58,136,85","91,230,110","171,57,164","166,227,50","108,70,157","227,158,81","79,28,66","39,60,28","170,151,46","139,179,42","189,236,165","99,236,155","156,53,25","170,164,132","114,37,109","77,116,159","152,132,223","229,144,184","68,182,43","173,87,146","198,93,234","230,112,202","227,135,131","41,49,45","106,44,30","215,177,170","177,231,195","205,193,52","158,231,100","86,184,206","44,99,35","101,70,74","177,207,234","60,116,129","58,78,150","100,147,225","219,86,86","116,114,89","187,171,228","227,63,146","208,96,125","117,159,121","157,107,94","133,116,174","126,48,76","173,143,172","75,119,222","100,126,23","185,195,121","141,168,176","185,114,217","120,98,121","126,192,125","145,100,54","45,39,79","220,230,128","117,151,72","218,230,90","69,156,73","183,147,74","81,198,113","158,173,63","150,154,92","185,151,106","70,83,26","192,240,132","118,193,70","186,208,173"]},setLocaleInfo:function(e,r){e.localeInfo=[],r.getAppLayout(function(r){var n=r.qLocaleInfo;e.localeInfo.thousandSep=n.qThousandSep,e.localeInfo.decimalSep=n.qDecimalSep,e.localeInfo.moneyFmt=n.qMoneyFmt,e.localeInfo.moneyThousandSep=n.qMoneyThousandSep,e.localeInfo.dateFmt=n.qDateFmt})},validateDimension:function(e){var r="undefined"!=typeof e.expression.qStringExpression?e.expression.qStringExpression.qExpr:e.expression;return!/\s/.test(r)&&/^\[.*]$/.test(r)&&(r=r.slice(1,-1)),r},validateMeasure:function(e){var r="undefined"!=typeof e.expression.qStringExpression?e.expression.qStringExpression.qExpr:e.expression;return!/\s/.test(r)&&/^\[.*]$/.test(r)&&(r=r.slice(1,-1)),r},getTickFormat:function(e,r){var n="",t=e.layout,o=t.props.measures[r],s=t.props.measures[r].numberFormatting;if("undefined"==typeof s||"0"==s)n="";else if("1"==s)if("undefined"==typeof o.formatting||1==o.formatting)switch(o.numberFormattingSimple){case 0:n=",.0f";break;case 1:n=",.1f";break;case 2:n=",.2f";break;case 3:n=".0%";break;case 4:n=".1%";break;case 5:n=".2%";break;default:n=",.2f"}else n=o.numberFormatPattern;else n="2"==s?"undefined"==typeof o.moneyFormatPattern?",.2f":o.moneyFormatPattern:"5"==s?"undefined"==typeof o.customFormatPattern?",.2f":o.customFormatPattern:"";return n},getSeparators:function(e,r){var n=e.layout,t=(n.props.measures[r],"");return t=e.localeInfo.decimalSep+e.localeInfo.thousandSep},getPrefix:function(e,r){var n=e.layout,t=n.props.measures[r],o=n.props.measures[r].numberFormatting,s="";return"2"!=o||"undefined"!=typeof t.prefixSuffix&&"prefix"!=t.prefixSuffix||(s="undefined"==typeof t.customCurrency?"$":t.customCurrency),s},getSuffix:function(e,r){var n=e.layout,t=n.props.measures[r],o=n.props.measures[r].numberFormatting,s="";return"2"==o&&"suffix"==t.prefixSuffix&&(s="undefined"==typeof t.customCurrency?"$":t.customCurrency),s},getNumberFormat:function(e,r){var n=e.layout,t=(n.props.measures[r],n.props.measures[r].numberFormatting),o=this.getTickFormat(e,r);return""===o&&(o=".2s"),"2"==t&&(o="$"+o),o},getLocale:function(r,n){var t=r.layout,o=t.props.measures[n],s=t.props.measures[n].numberFormatting,a=["$",""];"2"!=s||"undefined"!=typeof o.prefixSuffix&&"prefix"!=o.prefixSuffix?"2"==s&&"suffix"==o.prefixSuffix&&(a="undefined"==typeof o.customCurrency?["","$"]:["",o.customCurrency]):a="undefined"==typeof o.customCurrency?["$",""]:[o.customCurrency,""];var i=e.formatLocale({decimal:r.localeInfo.decimalSep,thousands:r.localeInfo.thousandSep,grouping:[3],currency:a});return i}}});
//# sourceMappingURL=../../maps/util/utils.js.map