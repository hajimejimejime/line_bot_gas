function send_reply_msg(access_token, reply_token, messages) {
  var url = 'https://api.line.me/v2/bot/message/reply';

  var payload = {
    'replyToken': reply_token,
    'messages': messages
  };

  var options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + access_token,
    },
    'payload' : JSON.stringify(payload)
  };

  // メッセージ送信
  UrlFetchApp.fetch(url, options)
}


function send_push_msg(access_token, destination_id, messages) {
  var url = 'https://api.line.me/v2/bot/message/push';

  var payload = {
    'to': destination_id,
    'messages': messages
  };

  var options = {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + access_token,
    },
    'payload' : JSON.stringify(payload)
  };

  // メッセージ送信
  UrlFetchApp.fetch(url, options)
}



function make_messages(msg_list) {

  var messages = [];
  for (var msg of msg_list){
    var msg_tmp = {
      'type': 'text',
      'text': msg
    }
    messages.push(msg_tmp);
  }

  return messages;
}


function make_messages_every5(msg_list){

  var msg_list_every5 = divide_array_every_num(msg_list, 5);

  var messages_list = [];
  for (var m of msg_list_every5) {
    var messages = make_messages(m);
    messages_list.push(messages);
  }

  return messages_list
}

function send_push_msg_saving(access_token, destination_id, msg_list) {

  var messages_every5 = make_messages_every5(msg_list);

  for (messages of messages_every5) {
    send_push_msg(access_token, destination_id, messages);
  }
}
