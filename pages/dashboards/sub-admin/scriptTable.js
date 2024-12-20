let tableHeaderInformation = {
    titleTable: "المندوبين",
    describtion: "اضافة مندوب , تعديل والمزيد ....",
    buttonHeader: {
      lable: "اضافة",
      iconName: "healthicons:truck-driver",
      func: () => {
        // console.log(addModal);     
        addModal.value.resetForm();
        buttonModalAdd.click();
      },
    },
  };
  
  let headers = ["#", "الاسم", "السكن", "الرقم", "الجنس", "عدد المنتجات"];
  let tableRows = [
    [1, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "50 - 100 - 200"],
    [2, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "56 - 666 - 598"],
    [3, "أحمد علي محمد", "بغداد - الكرادة", "07844320123", "ذكر", "24 - 143 - 567"],
  ];