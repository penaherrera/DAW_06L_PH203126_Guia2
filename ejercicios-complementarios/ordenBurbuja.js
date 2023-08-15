function sortValues() {
    const inputElement = document.getElementById("inputValues");
    const sortingTypeElement = document.getElementById("sortingType");
    const inputListElement = document.getElementById("inputList");
    const sortedListElement = document.getElementById("sortedList");
  
    const inputValues = inputElement.value.split(",").map(value => value.trim());
    const sortingType = sortingTypeElement.value;
  
    inputListElement.textContent = "Listado Ingresado: " + inputValues.join(", ");
    
    // Implementación del método de ordenación por burbuja
    for (let i = 0; i < inputValues.length - 1; i++) {
      for (let j = 0; j < inputValues.length - i - 1; j++) {
        if ((sortingType === "asc" && inputValues[j] > inputValues[j + 1]) ||
            (sortingType === "desc" && inputValues[j] < inputValues[j + 1])) {
          // Intercambiar elementos
          const temp = inputValues[j];
          inputValues[j] = inputValues[j + 1];
          inputValues[j + 1] = temp;
        }
      }
    }
  
    sortedListElement.textContent = "Listado Ordenado: " + inputValues.join(", ");
  }