//setTimeout(add_marker, 100, field);
	//console.log('indexOf :'+val.indexOf(val));
	//setTimeout(function(){ My_Location_Refresh(); }, 3000);

	if (typeof Cost_Savings == "undefined" || typeof Cost_Savings !='function'){	
	function Cost_Savings($Cost,$new){
	//$old_price = parseInt($old_price);
	//$new_price = parseInt($new_price);
	//$TC =Cost_Savings($old_price,$new_price);
	
	$Discount = $Cost - $new;
	$Discount = ($Discount / $Cost)*100;
	return $Discount;
	}//function Cost_Savings($Cost,$new){
	}//if (typeof Cost_Savings == "undefined" || typeof Cost_Savings !='function'){
	
	
	
	if (typeof Cost_Discount == "undefined" || typeof Cost_Discount !='function'){	
	function Cost_Discount($Cost,$Discount){
	//$old_price = parseInt($old_price);
	//$discount = parseInt($discount);
	//$TC = Cost_Discount($old_price,$discount); 
	
	$Discount_M = $Cost * ($Discount/100);
	$Rest = $Cost - $Discount_M;
	return $Rest;
	}//function Cost_Discount($Cost,$Discount){	
	}//if (typeof Cost_Discount == "undefined" || typeof Cost_Discount !='function'){	
	
	
	
/*##############       ##############*/
if (typeof storageAvailable == "undefined" || typeof storageAvailable !='function')
{
	//if (storageAvailable('localStorage'))
	//storageAvailable('sessionStorage')
	function storageAvailable(type) 
	{
		if(is_undefined(type))
			return false;
		
		//if(typeof(Storage) !== "undefined") 
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return e instanceof DOMException && (
				// everything except Firefox
				e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
				// acknowledge QuotaExceededError only if there's something already stored
				storage.length !== 0;
		}
	}//function storageAvailable(type) 	
}//if (typeof storageAvailable == "undefined" || typeof storageAvailable !='function'){
/*##############       ##############*/	

/*##############   sessionStorage    ##############*/	
/*##############       ##############*/
if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function')
{
	//SetSessionStor('sessionStorage');
	function SetSessionStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('sessionStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetSessionStor(type) 	
}//if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function'){
if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function')
{
	//SetSessionStor('sessionStorage');
	function SetSessionStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('sessionStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetSessionStor(type) 	
}//if (typeof SetSessionStor == "undefined" || typeof SetSessionStor !='function'){
/*##############       ##############*/	
/*##############   sessionStorage    ##############*/
/*##############       ##############*/
if (typeof SetLocalStor == "undefined" || typeof SetLocalStor !='function')
{
	//SetLocalStor('localStorage');
	function SetLocalStor(key) 
	{
		if(is_undefined(key))
			return false;
		
		if(storageAvailable('localStorage'))
		{
			return true;
		}//if(storageAvailable('sessionStorage'))
			
		return false;
	}//function SetLocalStor(type) 	
}//if (typeof SetLocalStor == "undefined" || typeof SetLocalStor !='function'){
/*##############       ##############*/	
	

	
	
	
	
	
	
	
	
	
	
/*##############       ##############*/
if (typeof My_Location_Refresh == "undefined" || typeof My_Location_Refresh !='function'){
	function My_Location_Refresh()
	{
		//return null;
		top.location = top.location;
		//location.reload(true);
	}//function My_Location_Refresh()
}//if (typeof My_Location_Refresh == "undefined" || typeof My_Location_Refresh !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof My_Location_Go == "undefined" || typeof My_Location_Go !='function'){
	function My_Location_Go(URL)
	{
		if(!is_undefined(URL) && is_string(URL) && !is_empty(URL))
		{
			window.location.href = URL;
			//self.location.href = URL;
			
			//top.location = top.location;
		}
		//top.frames["hidenIframe"].location =Action;
	}//function My_Location_Go(URL)
}//if (typeof My_Location_Go == "undefined" || typeof My_Location_Go !='function'){
/*##############       ##############*/
/*##############       ##############*/
if(typeof location_top == "undefined" || typeof location_top != 'function')
{	
	function location_top($Path_FORM_JS) {
		// alert($Path_FORM_JS);
		if ($Path_FORM_JS != '' && $Path_FORM_JS != undefined)
			top.location = $Path_FORM_JS;
		else
			top.location = top.location;
	} //function location_top()
}//if(typeof location_top == "undefined" || typeof location_top != 'function')
/*##############       ##############*/
/*##############       ##############*/
if (typeof Reload_Page == "undefined" || typeof Reload_Page !='function'){
	function Reload_Page()
	{
		location.reload();
	}//function Reload_Page()
}//if (typeof Reload_Page == "undefined" || typeof Reload_Page !='function'){
/*##############       ##############*/

function Set_Position_Offset(_object)
{
	//alert('Set_Position_Offset');
	if (is_undefined(_object) || !is_object(_object) || !is_jquery(_object)) {
		return false;
	}
	var offset = _object.offset();
	var position = _object.position();
	//var height = _object.height();
	//var height = _object.innerHeight();
	var height = _object.outerHeight();
	//var width = _object.width();
	//var width = _object.innerWidth();
	var width = _object.outerWidth();
	//_object.offset({ top: 10, left: 30 });
    //var offset_top = Set_parseFloat(offset.top);
	//var offset_top = Set_parseInt(offset.top);
	var offset_top = Set_parseFloat(offset.top);
	var position_top = Set_parseFloat(position.top);
	//console.log( "left: " + offset.left + ", top: " + offset.top );
	//console.log( "left: " + position.left + ", top: " + position.top );
	//console.log( "offset_top: " + offset_top + ", position_top: " + position_top );
	
	//$(window).scrollTop(offset_top - height);
	$(window).scrollTop(position_top - height);
}//function Set_Position_Offset(_object)

	
function bt_mousesheelNumber(a) {
	return (is_number(a)) ? a : null
}
function is_null(a) {
	return (a === null)
}
function is_undefined(a) {
	return (typeof a == 'undefined' || a === 'undefined')
	//return (is_null(a) || typeof a == 'undefined' || a === '' || a === 'undefined')
}
function is_empty(a) {
	return (trim_space(a) == '')
}
function is_array(a) {
	return (a instanceof Array)
}
function is_jquery(a) {
	return (a instanceof jQuery)
}
function is_object(a) {
	//return ((a instanceof Object || typeof a == 'object') && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a))
	return ((a instanceof Object || typeof a == 'object'))
}
function is_number(a) {
	return ((a instanceof Number || typeof a == 'number') && !isNaN(a))
}
function is_string(a) {
	return ((a instanceof String || typeof a == 'string') && !is_undefined(a) && !is_true(a) && !is_false(a))
}
function is_function(a) {
	return (a instanceof Function || typeof a == 'function')
}
function is_boolean(a) {
	return (a instanceof Boolean || typeof a == 'boolean' || is_true(a) || is_false(a))
}
function is_true(a) {
	return (a === true || a === 'true')
}
function is_false(a) {
	return (a === false || a === 'false')
}
function is_percentage(x) {
	return (is_string(x) && x.slice(-1) == '%')
}
function getTime() {
	return new Date().getTime()
	//var Hours = currentTime.getHours();
	//var Minutes = currentTime.getMinutes();
	//var Seconds = currentTime.getSeconds();
}
function deprecated(o, n) {
	debug(true, o + ' is DEPRECATED, support for it will be removed. Use ' + n + ' instead.')
}

/*##############       ##############*/
function is_email(email) 
{
	var RegE = new RegExp("^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$");
	if(!is_empty(email) && RegE.test(email))//trim_space(email)
	{
		return true;
	}//if(!is_empty(email) && RegE.test(email))
	return false;
}//function is_email(email) 
/*##############       ##############*/
/*##############       ##############*/
function is_url(url) 
{
	var RegE = new RegExp('(http|ftp|https)://[a-z0-9\-_]+(\.[a-z0-9\-_]+)+([a-z0-9\-\.,@\?^=%&;:/~\+#]*[a-z0-9\-@\?^=%&;/~\+#])?', 'i');
	if(!is_empty(url) && RegE.test(url))//trim_space(url)
	{
		return true;
	}//if(!is_empty(url) && RegE.test(url))
		
	return false;
}//function is_url(url) 
/*##############       ##############*/


function Set_parseFloat(n) {
	var num = parseFloat(n);
	if(is_number(num))
		return num;
	return n;
}//function Set_parseFloat(n) {
	
function Set_parseInt(n) {
	var num = parseInt(n);
	if(is_number(num))
		return num;
	return n;
}//function Set_parseInt(n) {
	
function Set_String(s) {
	return s.toString();
}

 
	//var x2 = _Array_Items_Barcode_UnChecked.indexOf(barcode_id);
	/*
	User_Online_Array.splice(0,User_Online_Array.length);

	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2,2);
	The result of fruits will be:

	Banana,Orange
	-------------------------------
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi")
	-------------------------
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var a = fruits.indexOf("Apple");//2
	*/	
function String_ToArray(s,prg) {
	if(is_string(s) && !is_undefined(prg))
	{
		A =  s.split(prg);
		if(is_array(A))
			return A;
	}
	return s;
}//function String_ToArray(s,p) {
function RemoveVal_In_Array(array,val)
{
	if(In_Array(array,val))
	{
		array.splice(array.indexOf(val),1);
	}
	//Object.post_comments = RemoveVal_In_Array(Object.post_comments,Comment_Object);
	//Object.post_comments.splice(comment_key, 1);
	return array;
}//function RemoveVal_In_Array(array,val)	
function Clear_Array(array)
{
	return array.splice(0,array.length);
}//function Clear_Array(array)

/*
 Array_push(_Array_Get_Val , val_input);
					 console.log('val_input :'+_Array_Get_Val.length);
*/
function Array_push(my_array,val)
{
	//return my_array.push(val);
	  my_array.push(val);
}//function Array_push(array,val)

function In_Array(array,val)
{
	if(!is_array(array))
		return false;
	if(array.indexOf(val) < 0)
		return false;
	return true;
	/*
	if(array.indexOf(val) < 0)
		array.push(val);
	//console.log('indexOf :'+val.indexOf(val));
	if(array.indexOf(val) >= 0)
		array.splice(array.indexOf(val),1);
	*/	
	/*
	$return = false;
	for($i = 0 ; $i < array.length ; $i++)
	{
		if(array[$i] == val)
		{
			$return = true;
			break;
		}//if(array[$i] == val)
	}//for($i = 0 ; $i < array.length ; $i++)
	return $return;
	*/
}//function In_Array(array,val)

function String_RePlace(s,Sfrom,Sto) {
	//if(is_empty(Sto))
	if(is_undefined(Sfrom) || is_undefined(Sto))
		return s;
	//s.replace("PT","");
	//alert(Sfrom)
	//if (Get_Has_Search(_Url, '&', 'gi'))
	var rs = s;	
	//var rs = s.replace(Sfrom,Sto);
	var _A = String_ToArray(rs,Sfrom);
	for (var i in _A)
	{
		rs = rs.replace(Sfrom,Sto);
	}
	return rs;
}//function String_RePlace(s,Sfrom,Sto) {

//if(Get_Has_Search(Sting,'v=','gi'))
function Get_Has_Search(Sting, Sting_Search, MyRegex) {
    if (typeof MyRegex == "undefined" && typeof MyRegex != '')
        MyRegex = 'gi';
    if (typeof Sting == "undefined" || typeof Sting_Search == "undefined")
        return false;
    //alert(Sting);
    var regex = new RegExp(Sting_Search, MyRegex);
    if (typeof Sting.search === 'function') {
        if (Sting.search(regex) != -1) {
            //Sting = Sting.replace(text_search,'');
            return true;
        } //if (Sting.search(regex) != -1){ 
    } //if (typeof Sting.search === 'function'){
    if (regex.test(Sting)) {
        //Sting = Url_Video.replace(text_search,'');
        return true;
    } //if (regex.test(Sting)){
    return false;
} //function Get_Has_Search(Sting,Sting_Search,MyRegex){
	
/*
        //if(Get_Has_Search(Url_Video,text_search,'gi'))
        $duration2 = $duration.replace("PT", "");
        $duration2 = $duration2.replace("H", ":");
        $duration2 = $duration2.replace("M", ":");
        $duration2 = $duration2.replace("S", "");
        $DurationArr = $duration2.split(':');

		
		     var text_search = 'www.youtube.com';
                if (Get_Has_Search(Url_Video, text_search, 'gi')) {
                    //var video_id = unescape(Url_Video.substring(0,(Url_Video.lastIndexOf("?")) + 1));
                    var _Url = unescape(Url_Video.substring((Url_Video.lastIndexOf("?")) + 1), Url_Video.length);
                    if (Get_Has_Search(_Url, 'v=', 'gi')) {
                        _Url = _Url.replace('v=', '');
                        if (Get_Has_Search(_Url, '&', 'gi'))
                            _Url = unescape(_Url.substring(0, _Url.indexOf("&")));
                        var video_id = _Url;
                        if (typeof Array_Data_Youtube_Api[video_id] == 'undefined') {
                            //alert(video_id);
                            GetVideoInfo_One_youtube_api(video_id);
                            //Array_Data_Youtube_Api[video_id] = {};
                        } //if (typeof Array_Data_Youtube_Api[video_id]=='undefined') {
                        else
                            ShowVideoInfo_One_youtube_api(video_id);
                    } //if(Get_Has_Search(_Url,'v=','gi')){
                    else {
                        $('#data_video_youtube_api').find('.api_data_loading_msseg').html($('#data_video_youtube_api').find('.api_data_loading_msseg_error.error2').html()).show();
                        $('#data_video_youtube_api #api_data_loading').removeAttr('disabled').removeClass("disabled");
                    }
                    //$('#data_video_youtube_api').parents('form').find(':input[type=submit]').removeAttr('disabled').removeClass("disabled");
                    //$('#data_video_youtube_api').find('#data_video_youtube_home').show();
                } //if(Get_Has_Search(Url_Video,text_search,'gi')){
		
*/

/*##############       ##############*/
function selectTexLine(TextareaObject,startPos,endPos) 
{
	// do selection
	// Chrome / Firefox
	if(typeof(TextareaObject.selectionStart) != "undefined") {
		TextareaObject.focus();
		TextareaObject.selectionStart = startPos;
		TextareaObject.selectionEnd = endPos;
		return true;
	}
	// IE
	 if (document.selection && document.selection.createRange) {
		TextareaObject.focus();
		TextareaObject.select();
		var range = document.selection.createRange();
		range.collapse(true);
		range.moveEnd("character", endPos);
		range.moveStart("character", startPos);
		range.select();
		return true;
	}
	return false;
}//function selectTexLine(TextareaObject,startPos,endPos) 
/*##############       ##############*/
/*##############       ##############*/
function selectTextareaLine(TextareaObject, selectText){
	var lines = TextareaObject.value.split("\n");
	// calculate start/end
	selectText = trim_space(selectText);
	var startPos = 0, endPos = TextareaObject.value.length;
	//var Search_Array = selectTextsplit(",");
	for(var x = 0; x < lines.length; x++) 
	{
		//alert(lines[x])
		s = trim_space(lines[x]);
		if(s == selectText) {
			//alert(lines[x])
			 endPos = (lines[x].length);
			break;
		}
		startPos += (lines[x].length+1);
	}//for(var x = 0; x < lines.length; x++) 
	var endPos = endPos+startPos;
	selectTexLine(TextareaObject,startPos,endPos) 
}//function selectTextareaLine(TextareaObject, selectText){
/*##############       ##############*/

/*##############       ##############*/
function Search_ReplaceTextareaLine(TextareaObject, SelectText){
	var lines =  String_ToArray(TextareaObject.value , '\n');
	var startPos = 0, endPos = TextareaObject.value.length;
	var Search_Array =  String_ToArray(SelectText , ',');
	for(var x = 0; x < lines.length; x++) 
	{
		s = trim_space(lines[x]);
		for(var x2 = 0; x2 < Search_Array.length; x2++) 
		{
			s2 = trim_space(Search_Array[x2]);
			if(s == s2) 
			{
				TextareaObject.value = String_RePlace(TextareaObject.value,s,'');
				//break;
			}	
		}//for(var x2 = 0; x2 < Search_Array.length; x2++) 
		startPos += (lines[x].length+1);
	}//for(var x = 0; x < lines.length; x++) 
}//function Search_ReplaceTextareaLine(TextareaObject, SelectText){
/*##############       ##############*/	
	
/*##############       ##############*/	
if (typeof convertNumbers2Arabic0 == "undefined" || typeof convertNumbers2Arabic0 != 'function') 
{
	function convertNumbers2Arabic0(string)
	{
		var newValue="";
		//var string="1234"; // this is your input string
		for (var i=0;i<string.length;i++)
		{
			var ch=string.charCodeAt(i);
			if (ch>=48 && ch<=57)
			{
				// european digit range
				var newChar=ch+1584;
				newValue=newValue+String.fromCharCode(newChar);
			}
			else
				newValue=newValue+String.fromCharCode(ch);
		}
		//alert(newValue);
		return newValue;
	}//function convertNumbers2Arabic0(string)  
}//if (typeof convertNumbers2Arabic0 == "undefined" || typeof convertNumbers2Arabic0 != 'function')
/*##############       ##############*/
/*##############       ##############*/	
if (typeof convertNumbers2Arabic == "undefined" || typeof convertNumbers2Arabic != 'function') 
{
	function convertNumbers2Arabic(string)
	{
		var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
		return string.replace(/[0-9]/g, function(w){
			return id[+w]
		});
	}//function convertNumbers2Arabic(string)  
}//if (typeof convertNumbers2Arabic == "undefined" || typeof convertNumbers2Arabic != 'function')
/*##############       ##############*/
/*##############       ##############*/
//  var string="1234";
//  convertNumbers2Arabic(string); 

if (typeof convertNumbers2English0 == "undefined" || typeof convertNumbers2English0 != 'function') 
{
	function convertNumbers2English0(string)
	{
		return string.replace(/[\u0660-\u0669]/g, function (c) {
			return c.charCodeAt(0) - 0x0660;
		}).replace(/[\u06f0-\u06f9]/g, function (c) {
		   return c.charCodeAt(0) - 0x06f0;
	   });
	}//function convertNumbers2English0(string) 
}//if (typeof convertNumbers2English0 == "undefined" || typeof convertNumbers2English0 != 'function')
/*##############       ##############*/
/*##############       ##############*/
if (typeof convertNumbers2English == "undefined" || typeof convertNumbers2English != 'function') 
{
	function convertNumbers2English(string)
	{
	   return string.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, function (c) {
			return c.charCodeAt(0) & 0xf;
		});
	}//function convertNumbers2English(string)  
}//if (typeof convertNumbers2English == "undefined" || typeof convertNumbers2English != 'function') 
/*##############       ##############*/


/*##############       ##############*/
if (typeof _DateToTimestamp == "undefined" || typeof _DateToTimestamp != 'function') 
{
	//alert(_DateToTimestamp('02/13/2018 23:31:30'));//2009-02-13 11:31:30 PM
	//_DateToTimestamp(h+":"+m+":"+s+"  "+month+" / "+daym+" / "+year);//
	function _DateToTimestamp(strDate)
	{
		//data += (new Date).getTime() / 1000;
		var datum = Date.parse(strDate);
		return datum/1000;
	}//function _DateToTimestamp(strDate) 
}//if (typeof _DateToTimestamp == "undefined" || typeof _DateToTimestamp != 'function') 
/*##############       ##############*/



/*##############       ##############*/
if (typeof clear_space == "undefined" || typeof clear_space != 'function') {
    function clear_space(str) {
        return str.split(' ').join('');
    }
} //if (typeof clear_space == "undefined" || typeof clear_space !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space == "undefined" || typeof trim_space != 'function') {
    function trim_space(str) {
		if (str == '' || str == null) 
		{
			return '';
		}
		if(!is_string(str))
		{
			return str;
		}
        return str.replace(/^\s+|\s+$/g, "");
    }
} //if (typeof trim_space == "undefined" || typeof trim_space !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space1 == "undefined" || typeof trim_space1 != 'function') {
    function trim_space1(str) {
		//$String = preg_replace("/\s+/u", " ", $String);
		str = trim_space(str);
		return str.replace(/\s+/u, " ");
      //return str.split(' ').join(' ');
    }
} //if (typeof trim_space1 == "undefined" || typeof trim_space1 !='function'){
/*##############       ##############*/

/*##############       ##############*/
if (typeof trim_space2 == "undefined" || typeof trim_space2 != 'function') {
    function trim_space2(myString) {
        return myString.replace(/^s+/g, '').replace(/s+$/g, '')
    }
} //if (typeof trim_space2 == "undefined" || typeof trim_space2 !='function'){
/*##############       ##############*/
/*##############       ##############*/
if (typeof trim_space3 == "undefined" || typeof trim_space3 != 'function') {
    function trim_space3(str) {
        str = str.toString();
        var begin = 0;
        var end = str.length - 1;
        while (begin <= end && str.charCodeAt(begin) < 33) {
            ++begin;
        }
        while (end > begin && str.charCodeAt(end) < 33) {
            --end;
        }
        return str.substr(begin, end - begin + 1);
    }
    //jQuery.trim(StringVariable) == '')
} //if (typeof trim_space3 == "undefined" || typeof trim_space3 !='function'){
/*##############       ##############*/
/*##############       ##############*/
if(typeof strip_tag == "undefined" || typeof strip_tag != 'function')
{	
	function strip_tag(html)
	{
		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		var str = tmp.textContent||tmp.innerText
		if (typeof str == "undefined")
			str  = html;
		var r =str.replace(/(&nbsp)*/g,"")
		r = r.replace(/<[^>]*>|\s/g, '');
		if(r == '')
			return false;
		else
			return true;
	}//function strip_tag(html)
}//if(typeof strip_tag == "undefined" || typeof strip_tag != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof MyCheckTime == "undefined" || typeof MyCheckTime != 'function')
{	
	function MyCheckTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	} //function MyCheckTime(i) {
}//if(typeof MyCheckTime == "undefined" || typeof MyCheckTime != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _SetCookieday == "undefined" || typeof _SetCookieday != 'function')
{	
	function _SetCookieday(CookieName, CookieValue, Exdays) {
		//alert(CookieName)
		var d = new Date();
		d.setTime(d.getTime() + (Exdays*24*60*60*1000));
		//d.setTime(d.getTime() + (Exdays * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		//document.cookie = CookieName + "=" + CookieValue + "; " + expires;
		document.cookie = CookieName + "=" + CookieValue + "; " + expires + ";path=/";
	} //function _SetCookieday(CookieName, CookieValue, Exdays) {
}//if(typeof _SetCookieday == "undefined" || typeof _SetCookieday != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _SetCookie == "undefined" || typeof _SetCookie != 'function')
{	
	function _SetCookie(CookieName, CookieValue, ExMins) 
	{
		var d = new Date();
		d.setTime(d.getTime() + (ExMins*60*1000));
		var expires = "expires="+d.toUTCString();  
		document.cookie = CookieName + "=" + CookieValue + ";" + expires + ";path=/";
	}//function _SetCookie(CookieName, CookieValue, ExMins) 	
		
}//if(typeof _SetCookie == "undefined" || typeof _SetCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _GetCookie == "undefined" || typeof _GetCookie != 'function')
{	
	function _GetCookie(CookieName) {
		var Name = CookieName + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1);
			if (c.indexOf(Name) == 0)
				return c.substring(Name.length, c.length);
		} //for(var i=0; i<ca.length; i++) {
		return "";
	} //function _GetCookie(CookieName) {
}//if(typeof _GetCookie == "undefined" || typeof _GetCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _CheckCookie == "undefined" || typeof _CheckCookie != 'function')
{	
	function _CheckCookie(Name) {
		var CookieName = _GetCookie(Name);
		if (CookieName != "") {
			return true;
		} else {
			return false;
		}
		/*
		if (CookieName!="") {
		alert("Welcome again " + CookieName);
		}else{
		CookieName = prompt("Please enter your name:", "");
		if (CookieName != "" && CookieName != null) {
		_SetCookie(Name, CookieName, 365);
		}
		}
		*/
	} //function _CheckCookie() {
}//if(typeof _CheckCookie == "undefined" || typeof _CheckCookie != 'function')
/*##############       ##############*/
/*##############       ##############*/
if(typeof _Delete_Cookie == "undefined" || typeof _Delete_Cookie != 'function')
{	
	function _Delete_Cookie(Name) {
		// document.cookie = Name + '=; Max-Age=0'
		//document.cookie = Name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		//document.cookie = Name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;;path=/';
		_SetCookie(Name, "", 0);
	} //function _Delete_Cookie(Name) {
}//if(typeof _Delete_Cookie == "undefined" || typeof _Delete_Cookie != 'function')
/*##############       ##############*/



