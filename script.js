const items=[
 {date:'29 AUG 2026',type:'team',tag:'战队 · 官方',title:'Vitality 开启秋季集训，巴黎基地进入封闭备战',text:'官方频道释出训练周影像；团队将在下一站赛事前进行地图池复盘与新战术测试。',source:'VITALITY.GG',url:'https://vitality.gg/news/'},
 {date:'28 AUG 2026',type:'player',tag:'成员 · ZywOo',title:'ZywOo：保持简单，才是高压 BO3 的解法',text:'新一期官方访谈聚焦决策节奏与赛前准备，ZywOo 分享近期个人训练重点。',source:'VITALITY.GG',url:'https://vitality.gg/news/'},
 {date:'27 AUG 2026',type:'team',tag:'赛事 · HLTV',title:'Vitality 锁定新赛季邀请赛席位',text:'HLTV 赛事页更新参赛名单，蜜蜂将在小组赛首轮迎战欧洲劲旅。',source:'HLTV',url:'https://www.hltv.org/team/9565/vitality'},
 {date:'26 AUG 2026',type:'player',tag:'成员 · apEX',title:'apEX：年轻阵容的上限取决于沟通质量',text:'队长在赛后媒体区谈到指挥风格，强调回合内信息优先于个人发挥。',source:'X / @TeamVitality',url:'https://x.com/TeamVitality'},
 {date:'25 AUG 2026',type:'player',tag:'成员 · flameZ',title:'flameZ 发布训练日常，瞄准突破位稳定性',text:'选手在 Instagram 分享训练片段，内容包括香蕉道协同与手枪局复盘。',source:'INSTAGRAM',url:'https://www.instagram.com/teamvitality/'},
 {date:'24 AUG 2026',type:'team',tag:'战队 · 社区',title:'社区票选：Vitality 本月最佳残局',text:'官方 X 发起互动投票，四个候选回合来自近期公开赛事录像。',source:'X / @TeamVitality',url:'https://x.com/TeamVitality'}
];
const list=document.querySelector('#news-list'); const render=(filter='all')=>{list.innerHTML=items.filter(x=>filter==='all'||x.type===filter).map(x=>`<article class="news-card"><time>${x.date}</time><div><span class="tag">${x.tag}</span><h3>${x.title}</h3><p>${x.text}</p></div><a class="source" href="${x.url}" target="_blank" rel="noreferrer">↗ ${x.source}</a></article>`).join('')};render();document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');render(b.dataset.filter)});
