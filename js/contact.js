window.addEventListener("load", function () {
    console.log("sayfa yüklendi");

    const submissionModalDOM = document.querySelector("#submission-confirm");
    const submissionModal = new bootstrap.Modal(submissionModalDOM, null);
    const contactFormDOM = document.querySelector("#contact-form");

    document.querySelector("#contact button[type='submit']").addEventListener("click", function (e) {
        e.preventDefault();
        submissionModal.show();
    });

    submissionModalDOM.addEventListener('hidden.bs.modal', () => {
        // modal kapandığı zaman tetiklenen event callback fonksiyonu

        // formu resetle
        contactFormDOM.reset();
    });
});