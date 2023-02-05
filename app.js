document.addEventListener('DOMContentLoaded', () => {

    const num1 = document.querySelector('#num1')
    const num2 = document.querySelector('#num2')
    const addBtn = document.querySelector('#add')
    const subBtn = document.querySelector('#sub')
    // const segBtn = document.querySelector('#seg')
    const output = document.querySelector('#output')
    

    // самостоятельно 

    // const newElemSegmentation = document.createElement('div')
    // newElemSegmentation.classList.add('segmentation')
    // newElemSegmentation.style = 'position: absolute; top: 50%; left: 50%;'
    // newElemSegmentation.innerHTML = `
    //     <button class="btn" id="seg" style="background: #FFFF00;">/</button>
    // `
    
    // document.body.appendChild(newElemSegmentation)

    // сам вставил элемент (кнопку деления) и прописал все действия и слушатели событий! Все работает
    const newElemSegmentation = document.getElementById('btnResults')
    newElemSegmentation.insertAdjacentHTML('beforeend', '<button class="btn" id="seg" style="background: #008000;">/</button>')

    const segBtn = document.querySelector('#seg')

    // добавляю кнопку умножения
    const newElemMultiplication = document.getElementById('btnResults')
    newElemMultiplication.insertAdjacentHTML('beforeend', '<button class="btn" id="mult"">*</button>')

    // автоматически почему - то не добавился отступ от другой кнопки! Добавил в ручную
    document.querySelector('#mult').style.margin='0 0 0 5px'

    const multBtn = document.querySelector('#mult')

    // добавляем кнопку процента 

    const newElemPercent = document.getElementById('btnResults')
    newElemPercent.insertAdjacentHTML('beforeend', '<button class="btn" id="percent">%</button>')

    const percentBtn = document.querySelector('#percent')

    document.querySelector('#percent').style.margin = '0 0 0 5px'
    document.querySelector('#percent').style.backgroundColor = '#483D8B'

    // добавляем кнопку возведения в степень

    const newElemDivision = document.getElementById('btnResults')
    newElemDivision.insertAdjacentHTML('beforeend', '<button class="btn" id="deg">√</button>')

    const degBtn = document.querySelector('#deg')

    document.querySelector('#deg').style.margin = '0 0 0 5px'
    
    // сам добавил стили к определенному элементу
    const sOut = document.querySelector('#output')
    sOut.style = 'color:brown; font-size:50px; text-align:center; line-height: 50px; '

    const sTitle = document.querySelector('#title-calc')
    sTitle.style = 'color:#191970; font-size: 50px; text-align:center;'

    function getInputValues() {
        const value1 = parseInt(num1.value)
        const value2 = +num2.value
    
        return [value1, value2]
    }

    function addHandler() {
        const values = getInputValues()
    
        const result = values[0] + values[1]
        // console.log(values)
    
        displayResult(result)
    }

    function subHandler() {
        const values = getInputValues()

        const result = values[0] - values[1]

        displayResult(result)
    }

    function segHandler() {
        const values = getInputValues()

        const result = values[0] / values[1]

        displayResult(result)
    }

    function multHandler() {
        const values = getInputValues()

        const result = values[0] * values[1]

        displayResult(result)
    }
 
    function percentHandler() {
        const values = getInputValues()

        const result = values[0]/100*values[1]

        displayResult(result)
    }

    function degHandler() {
        const values = getInputValues()

        const result = values[0] ** values[1]

        displayResult(result)
    }

    function displayResult(result) { 
        output.closest('.card').style.display = 'block'
        output.innerHTML = `Результат: ${result}`
        // console.trace() // вывод в консоль все вызовы функции. Удобно для тестирования
    }

     addBtn.addEventListener('click', addHandler)
     subBtn.addEventListener('click', subHandler)
     segBtn.addEventListener('click', segHandler)
     multBtn.addEventListener('click', multHandler)
     percentBtn.addEventListener('click', percentHandler)
     degBtn.addEventListener('click', degHandler)
})

