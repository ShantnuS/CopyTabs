document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById("btnCopy");
    btn.addEventListener('click', copyUrls);
});

function copyUrls(){
    var urls = "";
    chrome.windows.getAll({populate:true},function(windows){
        windows.forEach(function(window){
            window.tabs.forEach(function(tab){
                urls = urls + tab.title + ": " + tab.url + "\n";
            });
        });
        copyToClipboard(urls);
    });
}

function copyToClipboard(urls){
    var copyText = document.getElementById('txtCopy');
    copyText.value = urls;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}