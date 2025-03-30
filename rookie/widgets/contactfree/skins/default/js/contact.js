function submit_request(f) {
    f.nick_name.value = f.user_name.value;
    f.title.value = f.user_name.value + ' 님 문의접수';
    f.content.value = '<p><b>E-mail</b><br />' + f.email_address.value + '</p>';
	f.content.value += '<br /><br /><p><b>Phone</b><br />' + f.phone.value + '</p>';
    f.content.value += '<br /><br /><p><b>Message</b><br />' + f.message.value + '</p>';
    return procFilter(f, insert);
}

/* 글쓰기 작성후 */
function completeDocumentInserted(ret_obj) {
    jQuery('input:text,textarea','#contact').attr('disabled','disabled');
    jQuery('.btn-success').click(function() {
        alert('이미 등록되었습니다.');
        return false;
    });
    alert(ret_obj['message']);
    if (page_reload=='Y') {
        location.href = page_reload_url;
    }
}
