// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2' \
// -X GET 'https://api.twitch.tv/kraken/streams/?game=Overwatch'
// var apiUrl = 'https://api.twitch.tv/kraken/streams/?clientId=' + clientId + '&game=League%20of%20Legends&limit=' + limit ;


// 把資料寫成變數
var clientId = 'eq990vt85o5dquacakpy5u32ofrmmt';
var limit = 2;
var apiUrl = 'https://api.twitch.tv/kraken/streams/?clientId=' + clientId + '&game=League%20of%20Legends&limit=' + limit ;

// 我要一個新的 request
let request = new XMLHttpRequest();
// 送到哪裡去
request.open('GET', apiUrl, true);
request.setRequestHeader('client-id', clientId)
request.send();
// 加一個 callback function
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
}
// 最後把 request 送回去
//   request.send();

$.ajax({
    url: apiUrl,
    success:(Response) => {
    cb(null, response);
    }
})

getData(err, date) => {
    //const (streams)=data;
    const streams = data.streams;

    const $row = $('.row');
    for(var i = 0; i < stream.length; i++){
        $row.append(getColumn(streams[i]));
    }
    // //ES6 的寫法
    // for( let stream of streams) {
    //     $row.append(getColumn(stream));
    // }
}

// return 每一個 col 的 html

function getColumn(data) {
    return `
    <div class='col'>
        <div class='preview'>
            <img src='${data.preview.medium}' />
        </div>
        <div class='bottom'>
            <div class='bottom_avatar'>
                <img src='${data.chnnel.logo} />
            </div>
            <div class='bottom__intro'>
                <div class='channel__name'>
                ${data.chnnel.diplay_name}
                </div>
                <div class='owner__name'>${data.chnnel.status}</div>
            </div>
        </div>
    </div>
    `
}