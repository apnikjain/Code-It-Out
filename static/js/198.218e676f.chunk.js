(this.webpackJsonpcodeitout=this.webpackJsonpcodeitout||[]).push([[198],{357:function(e,a){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,n){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,n){var t="doc-comment",o=e.languages[a];if(o){var i=o[t];if(!i){var r={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};i=(o=e.languages.insertBefore(a,"comment",r))[t]}if(i instanceof RegExp&&(i=o[t]={pattern:i}),Array.isArray(i))for(var s=0,p=i.length;s<p;s++)i[s]instanceof RegExp&&(i[s]={pattern:i[s]}),n(i[s]);else n(i)}}(a,(function(e){e.inside||(e.inside={}),e.inside.rest=n}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=198.218e676f.chunk.js.map