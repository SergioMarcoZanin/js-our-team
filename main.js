`use strict`;

const team =[
    {
        "memberName": `Wayne Barnett`,
        "role": `Founder and Ceo`,
        "picture": `wayne-barnett-founder-ceo.jpg`
    },
    {
        "memberName": `Angela Caroll`,
        "role": `Chief Editor`,
        "picture": `angela-caroll-chief-editor.jpg`
    },
    {
        "memberName": `Walter Gordon`,
        "role": `Office manager`,
        "picture": `walter-gordon-office-manager.jpg`
    },
    {
        "memberName": `Angela Lopez`,
        "role": `Social media manager`,
        "picture": `angela-lopez-social-media-manager.jpg`
    },
    {
        "memberName": `Scott Estrada`,
        "role": `Developer`,
        "picture": `scott-estrada-developer.jpg`
    },
    {
        "memberName": `Barbara Ramos`,
        "role": `Graphic Designer`,
        "picture": `barbara-ramos-graphic-designer.jpg`
    }
]




for(i=0; i<team.length; i++){
   
    for (let key in team[i]){
        console.log(key, team[i][key]);
        
        if (key === `memberName`){
            const memberNameBox = document.createElement(`div`);
            memberNameBox.append(team[i][key]);
            document.body.appendChild(memberNameBox);
        } else if (key ===`role`){
            const memberRoleBox = document.createElement(`div`);
            memberRoleBox.append(team[i][key]);
            document.body.appendChild(memberRoleBox);
        }
        else if (key === `picture`){
            const memberImgBox = document.createElement(`img`);
            let imgSrc = `.//img/img/` + team[i][key];
            memberImgBox.src = imgSrc;
            
            document.body.appendChild(memberImgBox);
            console.log(imgSrc);
        }
        }
        
    }