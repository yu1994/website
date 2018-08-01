$(jqueryMap.queryFormEl).find(".submitQueryBtn").click(function () {
    // table.search("post")
    var arr = [],arrLength = arr.length,arrIndex = 0,titleNum = 0;
    $(jqueryMap.tableEl).find(".resultList").html('');
    $(jqueryMap.tableEl).find(".queryContent-condition input[type=checkbox]:checked").each(function (index, item) {
        arr[index] = $(this).val();
    });
    if (arr.length === 0) {
        return $.alert('请选择查询信息类');
    }
    arr.map(function (item,index) {
        arr[index] = JSON.parse(item);
    });
    var judgeObj = selectRequired(isRequired,true);
    if (judgeObj.judge){
        return $.alert(judgeObj.msg);
    }
    var queryForm = $(jqueryMap.queryFormEl),params = {
        name: queryForm.find("[name='name']").val(),
        idCard: queryForm.find("[name='idCard']").val(),
        phone: queryForm.find("[name='phone']").val(),
        bankCardNo: queryForm.find("[name='bankCardNo']").val(),
        plateNo: queryForm.find("[name='carCode']").val(),//车牌号
        VINNo:queryForm.find("[name='carShelfCode']").val(),//车架号
        vehicleEngineNo:queryForm.find("[name='engineCode']").val(),//车辆发动机号码
        cityID:queryForm.find(".city").val()
    };
    $(this).attr('disabled',true);
    $('#'+jqueryMap.waitEl).show();

    var infoAjax = (function () {
        params.diyServiceItems = JSON.stringify([arr[arrIndex]]);
        $.ajax({
            url: '/diyreport/get_report.json',
            type:'post',
            data: params,
            success: function (res) {
                if (res.code === 200) {
                    // alert('请求成功后')(
                    setTimeout(hintDisabled,1000);
                    var list = res.data.items;
                    list.map(function (item,i) {
                        list[i] = JSON.parse(item);
                    });
                    // console.log(list);
                    var html = '',infoMap = {};
                    list.forEach(function (item,index) {
                        if (item.code === 200){
                            item =item.data;
                            for (var i in item){
                                // console.log(item);
                                titleNum++;
                                var hHtml = '', rHtml = '';  //hHtml 头部  rHtml 表示 <tr> dHtml 表示 td
                                infoMap = {};
                                for (var k = 0; k <item[i].length; k++){
                                    var newVal = item[i][k];
                                    if ( Object.getOwnPropertyNames(infoMap).indexOf(newVal[Object.getOwnPropertyNames(newVal)[0]]) < 0){ //如果没有
                                        infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]] = [];
                                        infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]].push(newVal)
                                    }else{ //如果有
                                        infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]].push(newVal);
                                    }
                                }
                                // console.log(infoMap);
                                for(var h in infoMap ){
                                    infoMap[h].forEach(function (item,index) {
                                        var dHtml = '';
                                        if (infoMap[h].length >=2){
                                            if (index <1){ //如果是第一个
                                                for (var i in item){
                                                    if (i == Object.getOwnPropertyNames(item)[0]){
                                                        dHtml += '<td rowspan="'+infoMap[h].length+'" style="min-width: 200px;vertical-align: middle;">'+item[i]+'</td>';
                                                    }else{
                                                        // console.log(item[i]);
                                                        if(item[i].indexOf('|') > -1){
                                                            item[i].replace(/\|/g,'<br/>');
                                                        }
                                                        dHtml += '<td  style="min-width: 200px;">'+item[i]+'</td>';
                                                    }
                                                }
                                            }else{
                                                for (var p in item){
                                                    if(item[p].indexOf('|') > -1){
                                                        item[p] = item[p].replace(/\|/g,'<br/>');
                                                    }
                                                    if (p != Object.getOwnPropertyNames(item)[0]){
                                                        dHtml += '<td  style="min-width: 200px;vertical-align: middle;">'+item[p]+'</td>';
                                                    }
                                                }
                                            }
                                        }else{
                                            for (var t in item){
                                                if(item[t].indexOf('|') > -1){
                                                    item[t].replace(/\|/g,'<br/>');
                                                }
                                                dHtml += '<td  style="min-width: 200px;vertical-align: middle;">'+item[t]+'</td>';
                                            }
                                        }
                                        rHtml += '<tr>'+dHtml+'</tr>';
                                    })
                                }

                                try{
                                    for (var j in item[i][0]){
                                        hHtml+= '<td>'+j+'</td>\n'    //theader
                                    }
                                }catch (e){
                                }
                                html+= '<li>\n' +
                                    '     <h4 class="report-success" style="padding: 15px 0; font-weight: 600;">'+titleNum+'、'+i+'</h4>\n' +
                                    '<table style="text-align: center;" class="table table-condensed table-bordered table-hover">\n'+
                                    '<thead style="font-weight: 600;">\n'+'<tr>'+hHtml+'</tr>\n'+'</thead>\n'+
                                    ''+rHtml+'</table>\n'+
                                    '</li>';
                            }
                        }else{
                            titleNum++;
                            html+='<li><h4 class="report-underway" style="padding:15px 0;font-weight: 600;">'+titleNum+'、'+item.title+'</h4></li>';
                            html+='<li><strong  style="padding:15px 0;font-weight: 600;">'+item.msg+'</strong></li>';
                        }
                    });
                    $(jqueryMap.tableEl).find(".resultList").append(html);
                    if (arr.length-1 > arrIndex){
                        arrIndex ++;
                        return infoAjax()
                    }
                }else{
                    $.alert(res.msg);
                    setTimeout(hintDisabled,1000);
                }

            },
            error: function (mes) {
                $.alert("系统异常，请联系管理员。");
                setTimeout(hintDisabled,1000);
            }
        });
    });
     infoAjax();

    for (var j = 110, jen = arr.length; j < jen; j++){
        params.diyServiceItems = JSON.stringify([arr[j]]);
    $.ajax({
        url: '/diyreport/get_report.json',
        type:'post',
        data: params,
        success: function (res) {
            if (res.code === 200) {
                setTimeout(hintDisabled,1000);
                var list = res.data.items;
                list.map(function (item,i) {
                    list[i] = JSON.parse(item);
                });
                console.log(list);
                var html = '',infoMap = {};
                list.forEach(function (item,index) {
                    if (item.code === 200){
                        item =item.data;
                        for (var i in item){
                            console.log(item);
                            var hHtml = '', rHtml = '';  //hHtml 头部  rHtml 表示 <tr> dHtml 表示 td
                            infoMap = {};
                            for (var k = 0; k <item[i].length; k++){
                                var newVal = item[i][k];
                                if ( Object.getOwnPropertyNames(infoMap).indexOf(newVal[Object.getOwnPropertyNames(newVal)[0]]) < 0){ //如果没有
                                    infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]] = [];
                                    infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]].push(newVal)
                                }else{ //如果有
                                    infoMap[newVal[Object.getOwnPropertyNames(newVal)[0]]].push(newVal);
                                }
                            }
                            // console.log(infoMap);
                            for(var h in infoMap ){
                                infoMap[h].forEach(function (item,index) {
                                    var dHtml = '';
                                    if (infoMap[h].length >=2){
                                        if (index <1){ //如果是第一个
                                            for (var i in item){
                                                if (i == Object.getOwnPropertyNames(item)[0]){
                                                    dHtml += '<td rowspan="'+infoMap[h].length+'" style="min-width: 200px;vertical-align: middle;">'+item[i]+'</td>';
                                                }else{
                                                    console.log(item[i]);
                                                    if(item[i].indexOf('|') > -1){
                                                        item[i].replace(/\|/g,'<br/>');
                                                    }
                                                    dHtml += '<td  style="min-width: 200px;">'+item[i]+'</td>';
                                                }
                                            }
                                        }else{
                                            for (var p in item){
                                                if(item[p].indexOf('|') > -1){
                                                    item[p] = item[p].replace(/\|/g,'<br/>');
                                                }
                                                if (p != Object.getOwnPropertyNames(item)[0]){
                                                    dHtml += '<td  style="min-width: 200px;vertical-align: middle;">'+item[p]+'</td>';
                                                }
                                            }
                                        }
                                    }else{
                                        for (var t in item){
                                            if(item[t].indexOf('|') > -1){
                                                item[t].replace(/\|/g,'<br/>');
                                            }
                                            dHtml += '<td  style="min-width: 200px;vertical-align: middle;">'+item[t]+'</td>';
                                        }
                                    }
                                    rHtml += '<tr>'+dHtml+'</tr>';
                                })
                            }

                            try{
                                for (var j in item[i][0]){
                                    hHtml+= '<td>'+j+'</td>\n'    //theader
                                }
                            }catch (e){
                            }
                            html+= '<li>\n' +
                                '     <h4 class="report-success" style="padding: 15px 0; font-weight: 600;">'+i+'</h4>\n' +
                                '<table style="text-align: center;" class="table table-condensed table-bordered table-hover">\n'+
                                '<thead style="font-weight: 600;">\n'+'<tr>'+hHtml+'</tr>\n'+'</thead>\n'+
                                ''+rHtml+'</table>\n'+
                                '</li>';
                        }
                    }else{
                        html+='<li><h4 class="report-underway" style="padding:15px 0;font-weight: 600;">'+item.msg+'</h4></li>';
                    }
                });
                $(jqueryMap.tableEl).find(".resultList").append(html);

            }else{
                $.alert(res.msg)
                setTimeout(hintDisabled,1000);
            }
        },
        error: function (mes) {
            $.alert("系统异常，请联系管理员。");
            setTimeout(hintDisabled,1000);

        }
    });
   }
});
