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

function handleKeyDown(event) {
  if (event.key === "Enter") {
    var inputField = document.getElementById('inputField');
    var value = inputField.value;

    if (value.length === 5) {
      var url = 'https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=tutorid&wts_area_code=&query_value=' + value;
      window.open(url, '_blank');
    } else if (value.length >= 8) {
      var url = 'https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=phoneno&wts_area_code=&query_value=' + value;
      window.open(url, '_blank');
    }
  }
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    var inputField2 = document.getElementById('inputField2');
    var value = inputField2.value;

    if (value.length === 5) {
      var url = 'https://www.tutorcircle.hk/panel/admin/cases_approve/case.php?id=' + value;
      window.open(url, '_blank');
    } else if (value.length >= 8) {
      var url = 'https://www.tutorcircle.hk/panel/admin/search_cases/index.php?method=tel&query_value=' + value;
      window.open(url, '_blank');
    }
  }
}

function filterNonNumeric(event) {
  var input = event.target;
  var filteredValue = input.value.replace(/[^0-9]/g, '');
  input.value = filteredValue;
}
