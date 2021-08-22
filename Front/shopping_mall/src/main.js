// 종합 세팅
function Setting() {
    // json 파일 위치
    requestURL = '../shopping_mall/data/data.json';

    // http request 생성 후 open
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    // 서버 응답을 기다리고 나머지 처리
    request.onload = function() {
        var superHeroes = request.response;
        displayItems(superHeroes.items);
        logoClick(superHeroes.items);
        buttonClick(superHeroes.items);
    }
}

// html의 items class 자리에 item 추가
function displayItems(items) {
    const items_html = document.querySelector('.items');
    items.map(item => items_html.innerHTML += createHTMLString(item)).join('');
}
  
// item string을 return
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" class="item__thumbnail" />
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
        `;
}

function logoClick(items) {
    $(".logo").on('click', function(event) {
        event.preventDefault();

        // HttpCollection type을 Array type으로 변환
        var items_array = Array.from(document.getElementsByClassName("item"));

        // 모두 활성화
        items_array.map(item => {
            item.className = "item";
        });
    });
}

function buttonClick(items) {
    $(".buttons").on('click', function(event) {
        event.preventDefault();

        var data_key = $(document.activeElement).attr("data-key");
        var data_value = $(document.activeElement).attr("data-value");

        if (!data_key || !data_value) return;

        // HttpCollection type을 Array type으로 변환
        var items_array = Array.from(document.getElementsByClassName("item"));

        // 전체 items에서 해당 item 찾아내고 해당되지 않는 item은 비활성화
        items_array.map(item => {
            var img_src = item.getElementsByClassName("item__thumbnail")[0].src;
            var img_name = img_src.substr(img_src.lastIndexOf("/")+1);
            var value = img_name.split("_")

            if (data_key=="color") {
                if (data_value == value[0])
                    item.className = "item";
                else
                    item.className = "item invisible";
            }
            else {
                if (data_value[0] == value[1][0])
                    item.className = "item";
                else
                    item.className = "item invisible";
            }
        });
    })
}

// main
Setting();