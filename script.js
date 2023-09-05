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
