window.addEventListener('load' , ()=>{

    const form = document.querySelector("#new_task_form");
    const input = document.querySelector(".new-task-input");
    const list_el = document.querySelector(".tasks");

    form.addEventListener('submit' , (text)=>{
        text.preventDefault();    // this thing prevent to refresh the page. 
   
         const task_text = input.value;
         if(task_text.length ==0)
         {
            alert("Please fill out the task");
            return;
         }
         
         //creating task div and adding the text
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        
        //creating content div
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);  // appending content in task

       //creating input 
       const task_input_el = document.createElement("input");
       task_input_el.classList.add("text");
       task_input_el.type = "text";
      task_input_el.value = task_text;
      task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);  // appending input into content
 



      // Now here creating edit and delete button
      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      // creating edit button
      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Edit"
      //creating delete button
      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = "Delete";

      task_actions_el.appendChild(task_edit_el);   // appending edit and delete into actions
      task_actions_el.appendChild(task_delete_el);
      
      task_el.appendChild(task_actions_el);          //appending actions into task
      list_el.appendChild(task_el);         // appending task in tasks
      input.value="";



      // Now working on edit and delete button
      task_edit_el.addEventListener("click", ()=>{
         if(task_edit_el.innerText.toLowerCase()=="edit")
         {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();       // cursor automatic move towards input 
            task_input_el.style.color="green";
            task_edit_el.style.color="green";
            task_edit_el.innerText="Save";
         }  
         else{
            task_input_el.setAttribute("readonly", "readonly");
            task_input_el.style.color="rgb(240, 248, 255)";
            task_edit_el.style.color="rgb(44, 92, 202)";
            task_edit_el.innerText = "Edit";

         }

      });


      // now working on deleting part
       task_delete_el.addEventListener("click",()=>{
        list_el.removeChild(task_el);
       });




    })


});