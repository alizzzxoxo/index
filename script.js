function openURL(baseURL, inputId) {
  var id = document.getElementById(inputId).value;
  if (id !== "") {
    var url = baseURL + id;
    window.open(url, "_blank");
  }
}

function handleKeyPress(event, baseURL, inputId) {
  if (event.keyCode === 13) {
    openURL(baseURL, inputId);
    event.preventDefault();
  }
}

document.getElementById('approveId').addEventListener('keypress', function(event) {
  handleKeyPress(event, 'https://www.tutorcircle.hk/panel/admin/cases_approve/case.php?id=', 'approveId');
});

document.getElementById('confirmationId').addEventListener('keypress', function(event) {
  handleKeyPress(event, 'https://www.tutorcircle.hk/panel/admin/cases_confirm/case.php?id=', 'confirmationId');
});

document.getElementById('tutorListId').addEventListener('keypress', function(event) {
  handleKeyPress(event, 'https://www.tutorcircle.hk/panel/admin/cases_approve/completetutorlist_new.php?id=', 'tutorListId');
});

document.getElementById('receiptId').addEventListener('keypress', function(event) {
  handleKeyPress(event, 'https://www.tutorcircle.hk/panel/admin/cases_confirm/classreceipt.php?caseid=', 'receiptId');
});

document.getElementById('createCaseBtn').addEventListener('click', function() {var url = 'https://www.tutorcircle.hk/panel/admin/cases_create/'; window.open(url, '_blank');
});

function handleKeyDown(event, type) {
if (event.key === "Enter") {
  var inputField = type === 'tutor' ? document.getElementById('tutorInput') : document.getElementById('caseInput');
  var value = inputField.value;

if ((value.length >= 4 && value.length <= 6) && type === 'tutor') {
    var url = 'https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=tutorid&wts_area_code=&query_value=' + value;
    window.open(url, '_blank');
  } else if (value.length >= 8 && type === 'tutor') {
    var url = 'https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=phoneno&wts_area_code=&query_value=' + value;
    window.open(url, '_blank');
  } else if (value.length === 6 && type === 'case') {
    var url = 'https://www.tutorcircle.hk/panel/admin/cases_approve/case.php?id=' + value;
    window.open(url, '_blank');
  } else if (value.length >= 8 && type === 'case') {
    var url = 'https://www.tutorcircle.hk/panel/admin/search_cases/index.php?method=tel&query_value=' + value;
    window.open(url, '_blank');
  }
}
}

function filterNonNumeric(event, type) {
var input = event.target;
var filteredValue = input.value.replace(/[^0-9]/g, '');
input.value = filteredValue;
}

// 個案回覆複製功能
function copyContent2(inputId, textareaId) {
  const caseNumber = document.getElementById(inputId).value;
  const replyContent = document.getElementById(textareaId).value;
  navigator.clipboard.writeText(`${caseNumber}個案回覆：${replyContent}`);
}

// 導師回覆複製功能
function copyContent1(inputId, textareaId) {
  const tutorNumber = document.getElementById(inputId).value;
  const replyContent = document.getElementById(textareaId).value;
  navigator.clipboard.writeText(`${tutorNumber}導師回覆：${replyContent}`);
}

// 清除功能保持不變
function clearContent(inputId, textareaId) {
  document.getElementById(inputId).value = '';
  document.getElementById(textareaId).value = '';
}


// 雙開功能的 Enter 鍵處理
function handleDoubleOpenKeyDown(event) {
  if (event.key === 'Enter') {
    openCaseInDoubleTabs();
  }
}

// 雙開個案頁面
function openCaseInDoubleTabs() {
  const caseNumber = document.getElementById('doubleOpenId').value;
  if (caseNumber.length === 6) {
    // 替換成您實際的網址格式，這裡用範例網址
    const url1 = `https://www.tutorcircle.hk/panel/admin/cases_confirm/case.php?id=${caseNumber}`;
    const url2 = `https://www.tutorcircle.hk/panel/admin/cases_confirm/classreceipt.php?caseid=${caseNumber}`;
    
    window.open(url1, '_blank');
    window.open(url2, '_blank');
  } else {
    alert('請輸入6位數的個案編號');
  }
}

