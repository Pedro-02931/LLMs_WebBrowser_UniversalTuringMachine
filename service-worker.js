// Para mostrar o mesmo painel lateral em todos os sites (como no exemplo da documentação)
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Se você quiser ativar o painel apenas em sites específicos:
// const LLM_SITES = ['https://chat.openai.com', 'https://bard.google.com', /* ... outros sites ... */];
//
// chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
//   if (!tab.url) return;
//   const url = new URL(tab.url);
//   if (LLM_SITES.includes(url.origin)) {
//     await chrome.sidePanel.setOptions({
//       tabId: tabId,
//       path: 'sidepanel.html',
//       enabled: true
//     });
//   } else {
//     await chrome.sidePanel.setOptions({
//       tabId: tabId,
//       enabled: false
//     });
//   }
// });
//
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: 'openSidePanel',
//     title: 'Abrir Painel de Prompts',
//     contexts: ['page']
//   });
// });
//
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === 'openSidePanel') {
//     chrome.sidePanel.open({ tabId: tab.id });
//   }
// });