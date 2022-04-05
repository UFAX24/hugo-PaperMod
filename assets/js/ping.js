
$.ajax({
    url: 'https://www.google.com/ping?sitemap='+location.hostname+'/index.xml',
    beforeSend: function() {
         //xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
    }, success: function(data){
        console.log(data);
        //process the JSON data etc
    }
})