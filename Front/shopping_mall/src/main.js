function button_click() {
    $(".buttons").on('click', function(event) {
        event.preventDefault();
        var data_key = $(document.activeElement).attr("data-key");
        var data_value = $(document.activeElement).attr("data-value");

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

// main Event
button_click();