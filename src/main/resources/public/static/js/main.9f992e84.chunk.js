(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),r=c.n(s),i=(c(24),c(25),c(5)),j=c(2),h=c(8),m=c.n(h),l=c(10),o=c(11),d=(c(27),c(19)),u=(c(28),c(0)),b=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n=t===c.matchWinner;return Object(u.jsxs)("div",{className:n?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"vs",children:"vs"}),Object(u.jsx)("h1",{children:Object(u.jsxs)(i.b,{to:"/teams/".concat(a),children:[" ",a," "]})}),Object(u.jsx)("h2",{className:"match-date",children:c.date}),Object(u.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(u.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(u.jsxs)("div",{className:"additional-detail",children:[Object(u.jsx)("h3",{children:"First Innings"}),Object(u.jsx)("p",{children:c.team1}),Object(u.jsx)("h3",{children:"Second Innings"}),Object(u.jsx)("p",{children:c.team2}),Object(u.jsx)("h3",{children:"Man of the match"}),Object(u.jsx)("p",{children:c.playerOfMatch}),Object(u.jsx)("h3",{children:"Umpires"}),Object(u.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},O=(c(38),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n=t===c.matchWinner;return Object(u.jsxs)("div",{className:n?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(u.jsx)("span",{className:"vs",children:"vs"}),Object(u.jsx)("h3",{children:Object(u.jsxs)(i.b,{to:"/teams/".concat(a),children:[" ",a," "]})}),Object(u.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),x=function(){var e=Object(a.useState)({matches:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),c&&c.teamName?Object(u.jsxs)("div",{className:"TeamPage",children:[Object(u.jsx)("div",{className:"team-name-section",children:Object(u.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(u.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(u.jsx)(d.PieChart,{data:[{title:"Wins",value:c.totalWins,color:"rgb(92, 163, 92)"},{title:"Losses",value:c.totalMatches-c.totalWins,color:"rgb(209, 87, 87)"}]})]}),Object(u.jsxs)("div",{className:"match-detail-section",children:[Object(u.jsx)("h3",{children:"Lates Matches"}),Object(u.jsx)(b,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(u.jsx)(O,{teamName:c.teamName,match:e},e.id)})),Object(u.jsx)("div",{className:"more-section",children:Object(u.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(u.jsx)("h1",{children:"Team not found!"})},f=(c(39),function(e){for(var t=e.teamName,c=[],a="2008";a<="2020";a++)c.push(a);return Object(u.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),v=(c(40),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r,i]),0===c.length?Object(u.jsx)("h1",{children:"Matches not found!"}):Object(u.jsxs)("div",{className:"MatchPage",children:[Object(u.jsxs)("div",{className:"year-selector",children:[Object(u.jsx)("h3",{children:"Select year"}),Object(u.jsx)(f,{teamName:r},i)]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"page-heading",children:[r," matches in ",i]}),Object(u.jsx)("div",{children:c.map((function(e){return Object(u.jsx)(b,{teamName:r,match:e},e.id)}))})]})]})}),p=(c(41),c(42),function(e){var t=e.teamName;return Object(u.jsx)("div",{className:"TeamTile",children:Object(u.jsx)("h1",{children:Object(u.jsx)(i.b,{to:"/teams/".concat(t),children:t})})})}),N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(u.jsxs)("div",{className:"HomePage",children:[Object(u.jsx)("div",{className:"header-section",children:Object(u.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(u.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(u.jsx)(p,{teamName:e.teamName},e.id)}))})]})};var g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(u.jsx)(v,{})}),Object(u.jsx)(j.a,{path:"/teams/:teamName",children:Object(u.jsx)(x,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(N,{})})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),M()}},[[43,1,2]]]);
//# sourceMappingURL=main.9f992e84.chunk.js.map