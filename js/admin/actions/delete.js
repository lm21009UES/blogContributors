const checkboxes = document.querySelectorAll("input[type='checkbox']");

export const enableButtons = () => {
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            alert("Checked");
        }
    });
};
