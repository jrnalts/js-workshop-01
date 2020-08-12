window.addEventListener('DOMContentLoaded', function(){
  
  const li = document.querySelectorAll('ul li')
  const span = document.querySelectorAll('ul li span')
	const addBtn = document.getElementById('addBtn')
	const input = document.getElementById('input')

	// 所有的 li 都可以 新增/移除 class:checked
	li.forEach(function(item){
	  item.addEventListener('click', function(){
	    item.classList.toggle('checked')
			
			if (item.classList.textContent === 'checked'){
			item.classList.remove('checked')
			} else if (item.classList.textContent === ''){
			item.classList.add('checked')
			}
	  })
	})

	// 可以點「X」刪除
	span.forEach(function(item){
	  item.addEventListener('click', function(){
		item.parentElement.remove()
	  })
	})

	// 新增 todo row
	addBtn.addEventListener('click', function(){
		let tempRow = document.createElement('li')
		let closeBtn = document.createElement('span')
		let ul = document.querySelector('ul')
		closeBtn.textContent = 'x'
		closeBtn.className = 'close'

		console.log(ul);
		tempRow.textContent = document.querySelector('input').value
		tempRow.appendChild(closeBtn)
		ul.appendChild(tempRow)
		document.querySelector('input').value = ''

		closeBtn.addEventListener('click', function(){
			closeBtn.parentElement.remove()
		})

		tempRow.addEventListener('click', function(){
	    tempRow.classList.toggle('checked')
			
			if (tempRow.classList.textContent === 'checked'){
			tempRow.classList.remove('checked')
			} else if (tempRow.classList.textContent === ''){
			tempRow.classList.add('checked')
			}
	  })
	})

	// 拖拉功能

})
