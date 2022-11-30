

// price range js 
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});






// search box 
let show_advance_txt = document.getElementById('show_advance_txt')
let hide_advance_txt = document.getElementById('hide_advance_txt')

let area_div = document.getElementById('area-div')
let ref_div = document.getElementById('ref-div')
let keyword_div = document.getElementById('keyword-div')
let bed_div = document.getElementById('bed-div')
let search_btn = document.getElementById('search-btn')

show_advance_txt.addEventListener('click', function(){
    show_advance_txt.classList.add('d-none')
    hide_advance_txt.classList.remove('d-none')

    keyword_div.classList.remove('d-none')
    area_div.classList.remove('d-none')
    bed_div.classList.remove('d-none')
    ref_div.classList.remove('d-none')
    search_btn.classList.add('mt-3')
})
hide_advance_txt.addEventListener('click', function(){
    show_advance_txt.classList.remove('d-none')
    hide_advance_txt.classList.add('d-none')

    keyword_div.classList.add('d-none')
    area_div.classList.add('d-none')
    bed_div.classList.add('d-none')
    ref_div.classList.add('d-none')
    search_btn.classList.remove('mt-3')
})







// modal 
document.getElementById('price_range_selector_btn').addEventListener('click', function(){
    let min_value = document.getElementById('min_price_input').value
    let max_value = document.getElementById('max_price_input').value
    document.getElementById('price_modal_btn').innerHTML = min_value + ' - ' + max_value + ' AED '
})


document.getElementById('bed_range_selector_btn').addEventListener('click', function(){
    let min_bed = document.getElementById('min_bed_input').value
    let max_bed = document.getElementById('max_bed_input').value
    let min_bath = document.getElementById('min_bath_input').value
    let max_bath = document.getElementById('max_bath_input').value

    
    if (max_bed != "" & max_bath !=0 ){
        document.getElementById('bed_modal_btn').innerHTML = min_bed + " - " + max_bed + " | " + min_bath + " - " + max_bath
    }else{
        document.getElementById('bed_modal_btn').innerHTML = "Bed | Bath"
    }
})


document.getElementById('area_range_selector_btn').addEventListener('click', function(){
    let min_area = document.getElementById('min_area_input').value
    let max_area = document.getElementById('max_area_input').value

    
    if (max_area != "" ){
        document.getElementById('area_modal_btn').innerHTML = min_area + " - " + max_area
    }else{
        document.getElementById('area_modal_btn').innerHTML = "Area"
    }
})








jQuery("#id_buy_rent option").each(function(i, e) {
    (jQuery("<input type='radio' name='r' />")
      .attr("value", jQuery(this).val())
      .attr("checked", i == 0)
      .click(function() {
        jQuery("#id_buy_rent").val(jQuery(this).val());
      }).add($("<label>"+ this.textContent +"</label>")))
      .appendTo("#r");
  });
  



const text = '---------';
let matches = []

for (const div of document.getElementById('r').getElementsByTagName('label')) {
  if (div.textContent.includes(text)) {
    div.innerHTML = 'All'
  }
}

