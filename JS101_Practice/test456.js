document.addEventListener('DOMContentLoaded', () => {
    //定義 選取 function
    const qAll = n => document.querySelectorAll(n); 

    //驗證必填欄位
    document.forms.form.addEventListener('submit', e => {
        
        //驗證勾選項目的函式
        const c = nodes => {
            for (let i=0; i<nodes.length; i++) {
                if(nodes[i].checked) return true;
            }
            return false;
        }

        //標記＊的必填題目
        let reqQ = qAll('[data-symbol="*"]'); 
        
        //迴圈驗證題目，提示必填
        for(let i=0; i<reqQ.length; i++) {
            
            let block = reqQ[i].parentNode;  //題目背景元素
            let prompt = reqQ[i].parentNode.children[3]; //提示字元素
            let value = reqQ[i].parentNode.children[2].children[0].value;  //填入的值
            let cheNodes = reqQ[i].parentNode.children[2].childNodes; //準備驗證勾選的nodes
            let check = c(cheNodes);
            
            if (value === ''|| (i===2 && check===false) ) { 
                e.preventDefault();
                prompt.innerText = '這是必填問題';
                block.style.background = '#ffebee';
            } else {
                prompt.innerText = '';
                block.style.background = 'none';
            }
            
        }

        //成功提交，資料輸出在 console & alert
        const submitted = () => {
            for(let i=0; i<reqQ.length; i++) {
                let value = reqQ[i].parentNode.children[2].children[0].value;  //填入的值
                let cheNodes = reqQ[i].parentNode.children[2].childNodes; //準備驗證勾選的nodes
                let check = c(cheNodes);
                if (value === ''|| (i===2 && check===false) ) return;
            }
            let ans = qAll('input');
            console.log(`
                email：${ans[0].value};
                暱稱：${ans[1].value};
                報名類型：
                    從零到一基礎班：${ans[2].checked}
                    在職工程師加強班：${ans[3].checked}
                現在的職業：${ans[4].value};
                是否有程式相關背景：${ans[5].value};
                其他：${ans[6].value};
            `)
            alert ('Your information has been submitted.');
        }
        submitted();
    })
})