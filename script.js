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

document.getElementById('createCaseBtn').addEventListener('click', function() {
  var url = 'https://www.tutorcircle.hk/panel/admin/cases_create/';
  window.open(url, '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
  var inputField = document.getElementById('inputField');

  inputField.addEventListener('input', function() {
    var value = inputField.value;

    if (value.length === 5) {
      openURL('https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=tutorid&wts_area_code=&query_value=' + value, 'inputField');
    } else if (value.length >= 8) {
      openURL('https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=phoneno&wts_area_code=&query_value=' + value, 'inputField');
    }
  });

  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const value = searchInput.value;

      if (/^\d{5}$/.test(value)) {
        openURL('https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=tutorid&wts_area_code=&query_value=', 'searchInput');
      } else if (/^\d{8,}$/.test(value)) {
        openURL('https://www.tutorcircle.hk/panel/admin/search_tutors/index.php?method=phoneno&wts_area_code=&query_value=', 'searchInput');
      }
    }
  });
});
