!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function i(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return b(e)||/no(-?)highlight/.test(e)})[0]}function o(e,t){var n={};for(var r in e)n[r]=e[r];if(t)for(var r in t)n[r]=t[r];return n}function a(e){var t=[];return function r(e,i){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?i+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:i,node:o}),i=r(o,i),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:o}));return i}(e,0),t}function s(e,r,i){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}c+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function s(e){c+="</"+n(e)+">"}function l(e){("start"==e.event?a:s)(e.node)}for(var u=0,c="",f=[];e.length||r.length;){var d=o();if(c+=t(i.substr(u,d[0].offset-u)),u=d[0].offset,d==e){f.reverse().forEach(s);do l(d.splice(0,1)[0]),d=o();while(d==e&&d.length&&d[0].offset==u);f.reverse().forEach(a)}else"start"==d[0].event?f.push(d[0].node):f.pop(),l(d.splice(0,1)[0])}return c+t(i.substr(u))}function l(e){function t(e){return e&&e.source||e}function n(n,r){return RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var s={},l=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");s[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.k?l("keyword",i.k):Object.keys(i.k).forEach(function(e){l(e,i.k[e])}),i.k=s}i.lR=n(i.l||/\b[A-Za-z0-9_]+\b/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=n(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=n(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var u=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(o(e,t))}):u.push("self"==e?i:e)}),i.c=u,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var c=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=c.length?n(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function u(e,n,i,o){function a(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function s(e,t){return r(e.eR,t)?e:e.eW?s(e.parent,t):void 0}function f(e,t){return!i&&r(t.iR,e)}function d(e,t){var n=C.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var i=r?"":x.classPrefix,o='<span class="'+i,a=n?"":"</span>";return o+=e+'">',o+t+a}function h(){if(!k.k)return t(S);var e="",n=0;k.lR.lastIndex=0;for(var r=k.lR.exec(S);r;){e+=t(S.substr(n,r.index-n));var i=d(k,r);i?(N+=i[1],e+=p(i[0],t(r[0]))):e+=t(r[0]),n=k.lR.lastIndex,r=k.lR.exec(S)}return e+t(S.substr(n))}function g(){if(k.sL&&!w[k.sL])return t(S);var e=k.sL?u(k.sL,S,!0,_[k.sL]):c(S);return k.r>0&&(N+=e.r),"continuous"==k.subLanguageMode&&(_[k.sL]=e.top),p(e.language,e.value,!1,!0)}function m(){return void 0!==k.sL?g():h()}function v(e,n){var r=e.cN?p(e.cN,"",!0):"";e.rB?(T+=r,S=""):e.eB?(T+=t(n)+r,S=""):(T+=r,S=n),k=Object.create(e,{parent:{value:k}})}function y(e,n){if(S+=e,void 0===n)return T+=m(),0;var r=a(n,k);if(r)return T+=m(),v(r,n),r.rB?0:n.length;var i=s(k,n);if(i){var o=k;o.rE||o.eE||(S+=n),T+=m();do k.cN&&(T+="</span>"),N+=k.r,k=k.parent;while(k!=i.parent);return o.eE&&(T+=t(n)),S="",i.starts&&v(i.starts,""),o.rE?0:n.length}if(f(n,k))throw new Error('Illegal lexeme "'+n+'" for mode "'+(k.cN||"<unnamed>")+'"');return S+=n,n.length||1}var C=b(e);if(!C)throw new Error('Unknown language: "'+e+'"');l(C);for(var k=o||C,_={},T="",E=k;E!=C;E=E.parent)E.cN&&(T=p(E.cN,"",!0)+T);var S="",N=0;try{for(var A,j,L=0;k.t.lastIndex=L,A=k.t.exec(n),A;)j=y(n.substr(L,A.index-L),A[0]),L=A.index+j;y(n.substr(L));for(var E=k;E.parent;E=E.parent)E.cN&&(T+="</span>");return{r:N,value:T,language:e,top:k}}catch(M){if(-1!=M.message.indexOf("Illegal"))return{r:0,value:t(n)};throw M}}function c(e,n){n=n||x.languages||Object.keys(w);var r={r:0,value:t(e)},i=r;return n.forEach(function(t){if(b(t)){var n=u(t,e,!1);n.language=t,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function f(e){return x.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,x.tabReplace)})),x.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,t,n){var r=t?C[t]:n,i=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||i.push("hljs"),r&&i.push(r),i.join(" ").trim()}function p(e){var t=i(e);if(!/no(-?)highlight/.test(t)){var n;x.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,o=t?u(t,r,!0):c(r),l=a(n);if(l.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=s(l,a(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=d(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function h(e){x=o(x,e)}function g(){if(!g.called){g.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",g,!1),addEventListener("load",g,!1)}function v(t,n){var r=w[t]=n(e);r.aliases&&r.aliases.forEach(function(e){C[e]=t})}function y(){return Object.keys(w)}function b(e){return w[e]||w[C[e]]}var x={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},w={},C={};return e.highlight=u,e.highlightAuto=c,e.fixMarkup=f,e.highlightBlock=p,e.configure=h,e.initHighlighting=g,e.initHighlightingOnLoad=m,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=b,e.inherit=o,e.IR="[a-zA-Z][a-zA-Z0-9_]*",e.UIR="[a-zA-Z_][a-zA-Z0-9_]*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.CLCM={cN:"comment",b:"//",e:"$",c:[e.PWM]},e.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM]},e.HCM={cN:"comment",b:"#",e:"$",c:[e.PWM]},e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("xml",function(){var e="[A-Za-z0-9\\._:-]+",t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},n={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:e,r:0},{b:"=",r:0,c:[{cN:"value",c:[t],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[n],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[n],starts:{e:"</script>",rE:!0,sL:"javascript"}},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},n]}]}}),hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});