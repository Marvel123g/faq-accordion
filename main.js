    const faq = document.querySelector('.faq-content');
    faq.addEventListener("click", e =>{
        const groupHeader = e.target.closest('.faq-group-header');
        if(!groupHeader) 
            return;
    
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const otherGroups = faq.querySelectorAll('.faq-group');
        const icon = groupHeader.querySelector('.icon');
    
        if(groupBody && icon){
            icon.classList.toggle('icon-minus');
            icon.classList.toggle('icon-plus');
            groupBody.classList.toggle('open');
        }
       
        otherGroups.forEach((otherGroup) =>{
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header .icon');
    
                if( otherGroupBody && otherIcon) {
                    otherGroupBody.classList.remove('open');
                    otherIcon.classList.remove('icon-minus');
                    otherIcon.classList.add('icon-plus');
                }
            }
        });
    });
