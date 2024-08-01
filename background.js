chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    // Inicialização ou configuração inicial
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  });
  