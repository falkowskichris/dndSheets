/* CURRENTLY IN: javascript/main.js */


function checkIfLocallyStored() {
  const data = window.localStorage.getItem('data');
  if ( data === null ) {
    return;
  }

  const properties = JSON.parse(data)
  console.log(properties)
  

  str = properties.str;
  $('.js-str')
    .val(str)
    .trigger('change');
  dex = properties.dex;
  $('.js-dex')
    .val(dex)
    .trigger('change');
  con = properties.con;
  $('.js-con')
    .val(con)
    .trigger('change');
  int = properties.int;
  $('.js-int')
    .val(int)
    .trigger('change');
  wis = properties.wis;
  $('.js-wis')
    .val(wis)
    .trigger('change');
  cha = properties.cha; 
  $('.js-cha')
    .val(cha)
    .trigger('change');

  charName = properties.charName;
  $('.js-char-name')
    .val(charName)
    .trigger('change');
  charClass = properties.charClass;
  $('.js-char-class')
    .val(charClass)
    .trigger('change');
  level = properties.level;
  $('.js-level')
    .val(level)
    .trigger('change');
  playerName = properties.playerName;
  $('.js-player-name')
    .val(playerName)
    .trigger('change');
  charRace = properties.charRace;
  $('.js-char-race')
    .val(charRace)
    .trigger('change');
  charExp = properties.charExp;
  $('.js-char-exp')
    .val(charExp)
    .trigger('change');
  armorClass = properties.armorClass;
  $('.js-armor-class')
    .val(armorClass)
    .trigger('change');
  charSpeed = properties.charSpeed;
  $('.js-char-speed')
    .val(charSpeed)
    .trigger('change');
  otherProfs = properties.otherProfs;
  $('.js-other-profs')
    .val(otherProfs)
    .trigger('change');
  charBackground = properties.charBackground;
  $('.js-char-background')
    .val(charBackground)
    .trigger('change');    
  charAlign = properties.charAlign;
  $('.js-char-align')
    .val(charAlign)
    .trigger('change');
  currentHP = properties.currentHP;
  $('.js-current-hp')
    .val(currentHP)
    .trigger('change');
  tempHP = properties.tempHP;
  $('.js-temp-hp')
    .val(tempHP)
    .trigger('change');


}

function changeMods() {

  changeThrowMod();
  changeSkillMod();
  changePassPerc(); 
}


// Values required for storage
let level = null;
let str = null;
let dex = null;
let con = null;
let int = null;
let wis = null;
let cha = null;
let charName = null;
let charClass = null;
let charBackground = null;
let playerName = null;
let charRace = null;
let charAlign = null;
let charExp = null;
let armorClass = null;
let charSpeed = null;
let currentHP = null;
let otherProfs = null;
let tempHP = null;





// Derivitive values not needed for storage
let profMod = null;
let strMod = null;
let dexMod = null;
let conMod = null;
let intMod = null;
let wisMod = null;
let chaMod = null;
let passivePerc = null;

// window.localStorage.setItem('key', val)
// window.localStorage.getItem('key') -- if empty this method will return null

// function onSaveBtnClick() {
  // const GameState = {};
  // const nameKey = 'gorag_the_destroyer'
  // GameState[nameKey] = {
  //   level,
  // }

//   const nameKey2 = 'foobar_etc';

//   GameState[nameKey2] = {
//     level,
//   }
//   console.log(GameState)
// }

saveButton = $('.js-save')
$(saveButton).on('click', function(e) {
  onSaveBtnClick();
});

function onSaveBtnClick() {

  const data = {
    charName,
    level,
    str,
    dex,
    con,
    int,
    wis,
    dex,
    cha,
    charClass,
    charBackground,
    playerName,
    charRace,
    charAlign,
    charExp,
    armorClass,
    charSpeed,
    currentHP,
    otherProfs,
    tempHP,
  };

  const dataStr = JSON.stringify(data);

  window.localStorage.setItem('data', dataStr);

};

clearButton = $('.js-clear')
$(clearButton).on('click', function(e) {
  onClearBtnClick();
});

function onClearBtnClick() {
  localStorage.clear();
}

  /*

  to grab and update data

  - read window.localStorage.getItem('data')
  - ^^^ it will either be null or have a string
  - if null, return {}
  - else, JSON.parse(string)
  function getStoredData(){}

  - what we mean by currentData.... const currentData = getStoredData()
  - take the data you got from getStoredData()
  - pass it in to this function along with the 'nameKey' - the name user has entered
  - in your function, do currentData[nameKey] = { level, str, ...etc... }
  - return currentData
  function appendToStoredData(currentData, nameKey) {}
*/  

  // const currentData = getStoredData()
  // const updatedData = appendToStoredData(currentData, 'gorag_the_destroyer')
  // window.localStorage.setItem('data', JSON.stringify(updatedData))




// text areas that I need to save for storage



const charNameEl = $('.js-char-name')
$(charNameEl).on('keyup change', function(e) {
  charName = (charNameEl.val()).replace(/ /g, "_");
});

const charClassEl = $('.js-char-class')
$(charClassEl).on('keyup change', function(e) {
  charClass = (charClassEl.val()).replace(/ /g, "_");
});

const charBackgroundEl = $('.js-char-background')
$(charBackgroundEl).on('keyup change', function(e) {
  charBackground = (charBackgroundEl.val()).replace(/ /g, "_");
});

const playerNameEl = $('.js-player-name')
$(playerNameEl).on('keyup change', function(e) {
  playerName = (playerNameEl.val()).replace(/ /g, "_");
});

const charRaceEl = $('.js-char-race')
$(charRaceEl).on('keyup change', function(e) {
  charRace = (charRaceEl.val()).replace(/ /g, "_");
});

const charAlignEl = $('.js-char-align')
$(charAlignEl).on('keyup change', function(e) {
  charAlign = (charAlignEl.val()).replace(/ /g, "_");
});

const charExpEl = $('.js-char-exp')
$(charExpEl).on('keyup change', function(e) {
  charExp = (charExpEl.val()).replace(/ /g, "_");
});

const currentHPEl = $('.js-current-hp')
$(currentHPEl).on('keyup change', function(e) {
  currentHP = (currentHPEl.val()).replace(/ /g, "_");
});

const tempHPEl = $('.js-temp-hp')
$(tempHPEl).on('keyup change', function(e) {
  tempHP = (tempHPEl.val()).replace(/ /g, "_");
});

const otherProfsEl = $('.js-other-profs')
$(otherProfsEl).on('keyup change', function(e) {
  otherProfs = (otherProfsEl.val()).replace(/ /g, "_");
});

const armorClassEl = $('.js-armor-class')
$(armorClassEl).on('keyup change', function(e) {
  armorClass = (armorClassEl.val()).replace(/ /g, "_");
});



// Level change into proficiency modifier code below

const levelEl = $('.js-level');

$(levelEl).on('keypress keyup change', function(e) {
  level = levelEl.val();
    if (level >= 1 && level < 5) {
      profMod = 2;
    }
    else if (level >= 5 && level < 9) {
      profMod = 3;
    }
    else if (level >= 9 && level < 13) {
      profMod = 4;
    } 
    else if (level >= 13 && level < 17) {
      profMod = 5;
    } 
    else if (level >= 17 && level <= 20) {
      profMod = 6;
    }
    else {
      profMod = 0;
    };
  const profBonusEl = $('.js-prof-bonus')
    profBonusEl.text("+" + profMod);
    changeThrowMod();
    changeSkillMod();
    changePassPerc();
});


function changePassPerc() {
  const passivePercEl = $('.js-passivePerc')
  const percCheckEl = $('.js-percCheck')
  const percCheck = percCheckEl.is(":checked change");
    if (wisMod > 0 && percCheck == false) {
      const passivePerc = (10 + wisMod)
      passivePercEl.text("+" + passivePerc);
    }
    else if (wisMod === 0 && percCheck == true) {
      const passivePerc = (10 + wisMod + profMod)
      passivePercEl.text("+" + passivePerc);
    }
    else if (wisMod === 0 && percCheck == false) {
      const passivePerc = (10 + wisMod)
      passivePercEl.text("+" + passivePerc);
    }
    else if ((wisMod + profMod) > 0 && percCheck == true) {
      const passivePerc = (10 + (wisMod + profMod))
      passivePercEl.text("+" + passivePerc);
    }
    else if ((wisMod + profMod) === 0 && percCheck == true) {
      const passivePerc = (10 + profMod)
      passivePercEl.text("+" + passivePerc);
    }
    else if (wisMod < 0 && percCheck == false) {
      const passivePerc = (10 + wisMod)
      passivePercEl.text("+" + passivePerc);
    }
    else if ((wisMod + profMod) < 0 && percCheck == true) {
      const passivePerc = (10 + wisMod + profMod)
      passivePercEl.text("+" + passivePerc);
    }
}


// Below are all the ability stat in ability modifer functions
const strEl = $('.js-str');
  
$(strEl).on('keyup change', function() {
  str = parseInt(strEl.val(), 10);
    if (str === 1) {
      strMod = -5;
    }
    else if (str === 2 || str === 3) {
      strMod = -4;
    }
    else if (str === 4 || str === 5) {
      strMod = -3;
    }
    else if (str === 6 || str === 7) {
      strMod = -2;
    }
    else if (str === 8 || str === 9) {
      strMod = -1;
    }
    else if (str === 10 || str === 11) {
      strMod = 0;
    }
    else if (str === 12 || str === 13) {
      strMod = 1;
    }
    else if (str === 14 || str === 15) {
      strMod = 2;
    }
    else if (str === 16 || str === 17) {
      strMod = 3;
    }
    else if (str === 18 || str === 19) {
      strMod = 4;
    }
    else if (str === 20) {
      strMod = 5;
    }
    else {
      strMod = 0;
    };
  const strModEl = $('.js-str-mod')
    if (strMod > 0) {
      strModEl.text("+" + strMod);
    }
    else {
      strModEl.text(strMod);
    }
    changeThrowMod();
    changeSkillMod();
    changePassPerc();
});

const dexEl = $('.js-dex');
  
$(dexEl).on('keyup change', function() {
  dex = parseInt(dexEl.val(), 10);
  if (dex === 1) {
    dexMod = -5;
  }
  else if (dex === 2 || dex === 3) {
    dexMod = -4;
  }
  else if (dex === 4 || dex === 5) {
    dexMod = -3;
  }
  else if (dex === 6 || dex === 7) {
    dexMod = -2;
  }
  else if (dex === 8 || dex === 9) {
    dexMod = -1;
  }
  else if (dex === 10 || dex === 11) {
    dexMod = 0;
  }
  else if (dex === 12 || dex === 13) {
    dexMod = 1;
  }
  else if (dex === 14 || dex === 15) {
    dexMod = 2;
  }
  else if (dex === 16 || dex === 17) {
    dexMod = 3;
  }
  else if (dex === 18 || dex === 19) {
    dexMod = 4;
  }
  else if (dex === 20) {
    dexMod = 5;
  }
  else {
    dexMod = 0;
  };
    const dexModEl = $('.js-dex-mod')
  if (dexMod > 0) {
    dexModEl.text("+" + dexMod);
  }
  else {
    dexModEl.text(dexMod);
  }
    changeThrowMod();
    changeSkillMod();
    changePassPerc();
});

const conEl = $('.js-con');
  
$(conEl).on('keyup change', function() {
  con = parseInt(conEl.val(), 10);
  if (con === 1) {
    conMod = -5;
  }
  else if (con === 2 || con === 3) {
    conMod = -4;
  }
  else if (con === 4 || con === 5) {
    conMod = -3;
  }
  else if (con === 6 || con === 7) {
    conMod = -2;
  }
  else if (con === 8 || con === 9) {
    conMod = -1;
  }
  else if (con === 10 || con === 11) {
    conMod = 0;
  }
  else if (con === 12 || con === 13) {
    conMod = 1;
  }
  else if (con === 14 || con === 15) {
    conMod = 2;
  }
  else if (con === 16 || con === 17) {
    conMod = 3;
  }
  else if (con === 18 || con === 19) {
    conMod = 4;
  }
  else if (con === 20) {
    conMod = 5;
  }
  else {
    conMod = 0;
  };
    const conModEl = $('.js-con-mod')
  if (conMod > 0) {
    conModEl.text("+" + conMod);
  }
  else {
    conModEl.text(conMod);
  }
  changeThrowMod();
  changeSkillMod();
  changePassPerc();
});

const intEl = $('.js-int');
  
$(intEl).on('keyup change', function() {
  int = parseInt(intEl.val(), 10);
  if (int === 1) {
    intMod = -5;
  }
  else if (int === 2 || int === 3) {
    intMod = -4;
  }
  else if (int === 4 || int === 5) {
    intMod = -3;
  }
  else if (int === 6 || int === 7) {
    intMod = -2;
  }
  else if (int === 8 || int === 9) {
    intMod = -1;
  }
  else if (int === 10 || int === 11) {
    intMod = 0;
  }
  else if (int === 12 || int === 13) {
    intMod = 1;
  }
  else if (int === 14 || int === 15) {
    intMod = 2;
  }
  else if (int === 16 || int === 17) {
    intMod = 3;
  }
  else if (int === 18 || int === 19) {
    intMod = 4;
  }
  else if (int === 20) {
    intMod = 5;
  }
  else {
    intMod = 0;
  };
    const intModEl = $('.js-int-mod')
  if (intMod > 0) {
    intModEl.text("+" + intMod);
  }
  else {
    intModEl.text(intMod);
  }
  changeThrowMod();
  changeSkillMod();
  changePassPerc();
});

const wisEl = $('.js-wis');
  
$(wisEl).on('keyup change', function() {
  wis = parseInt(wisEl.val(), 10);
  if (wis === 1) {
    wisMod = -5;
  }
  else if (wis === 2 || wis === 3) {
    wisMod = -4;
  }
  else if (wis === 4 || wis === 5) {
    wisMod = -3;
  }
  else if (wis === 6 || wis === 7) {
    wisMod = -2;
  }
  else if (wis === 8 || wis === 9) {
    wisMod = -1;
  }
  else if (wis === 10 || wis === 11) {
    wisMod = 0;
  }
  else if (wis === 12 || wis === 13) {
    wisMod = 1;
  }
  else if (wis === 14 || wis === 15) {
    wisMod = 2;
  }
  else if (wis === 16 || wis === 17) {
    wisMod = 3;
  }
  else if (wis === 18 || wis === 19) {
    wisMod = 4;
  }
  else if (wis === 20) {
    wisMod = 5;
  }
  else {
    wisMod = 0;
  };
    const wisModEl = $('.js-wis-mod')
  if (wisMod > 0) {
    wisModEl.text("+" + wisMod);
  }
  else {
    wisModEl.text(wisMod);
  }
  changeThrowMod();
  changeSkillMod();
  changePassPerc();
});

const chaEl = $('.js-cha');
  
$(chaEl).on('keyup change', function() {
  cha = parseInt(chaEl.val(), 10);
  if (cha === 1) {
    chaMod = -5;
  }
  else if (cha === 2 || cha === 3) {
    chaMod = -4;
  }
  else if (cha === 4 || cha === 5) {
    chaMod = -3;
  }
  else if (cha === 6 || cha === 7) {
    chaMod = -2;
  }
  else if (cha === 8 || cha === 9) {
    chaMod = -1;
  }
  else if (cha === 10 || cha === 11) {
    chaMod = 0;
  }
  else if (cha === 12 || cha === 13) {
    chaMod = 1;
  }
  else if (cha === 14 || cha === 15) {
    chaMod = 2;
  }
  else if (cha === 16 || cha === 17) {
    chaMod = 3;
  }
  else if (cha === 18 || cha === 19) {
    chaMod = 4;
  }
  else if (cha === 20) {
    chaMod = 5;
  }
  else {
    chaMod = 0;
  };
    const chaModEl = $('.js-cha-mod')
  if (chaMod > 0) {
    chaModEl.text("+" + chaMod);
  }
  else {
    chaModEl.text(chaMod);
  }
  changeThrowMod();
  changeSkillMod();
  changePassPerc();
});

// Below is th change attribute saving throw function, called by other functions when making changes.
function changeThrowMod() {
    function changeStrMod() {
      const strRollModEl = $('.js-strRollMod')
      const strCheckEl = $('.js-strCheck')
      const strCheck = strCheckEl.is(":checked click");
        if (strMod > 0 && strCheck == false) {
          strRollModEl.text("+" + strMod);
        }
        else if ((strMod === 0) && strCheck == false) {
          strRollModEl.text("+" + 0);
        }
        else if ((strMod + profMod) > 0 && strCheck == true) {
          strRollModEl.text("+" + (strMod + profMod));
        }
        else if ((strMod + profMod) === 0 && strCheck == true) {
          strRollModEl.text("+" + 0);
        }
        else if (strMod < 0 && strCheck == false) {
          strRollModEl.text(strMod);
        }
        else if ((strMod + profMod) < 0 && strCheck == true) {
          strRollModEl.text(strMod + profMod);
        }
    }
    function changeDexMod() {
      const dexRollModEl = $('.js-dexRollMod')
      const dexCheckEl = $('.js-dexCheck')
      const dexCheck = dexCheckEl.is(":checked");
        if (dexMod > 0 && dexCheck == false) {
          dexRollModEl.text("+" + dexMod);
        }
        else if ((dexMod === 0) && dexCheck == false) {
          dexRollModEl.text("+" + 0);
        }
        else if ((dexMod + profMod) > 0 && dexCheck == true) {
          dexRollModEl.text("+" + (dexMod + profMod));
        }
        else if ((dexMod + profMod) === 0 && dexCheck == true) {
          dexRollModEl.text("+" + 0);
        }
        else if (dexMod < 0 && dexCheck == false) {
          dexRollModEl.text(dexMod);
        }
        else if ((dexMod + profMod) < 0 && dexCheck == true) {
          dexRollModEl.text(dexMod + profMod);
        }
    }
    function changeConMod() {
      const conRollModEl = $('.js-conRollMod')
      const conCheckEl = $('.js-conCheck')
      const conCheck = conCheckEl.is(":checked");
        if (conMod > 0 && conCheck == false) {
          conRollModEl.text("+" + conMod);
        }
        else if ((conMod === 0) && conCheck == false) {
          conRollModEl.text("+" + 0);
        }
        else if ((conMod + profMod) > 0 && conCheck == true) {
          conRollModEl.text("+" + (conMod + profMod));
        }
        else if ((conMod + profMod) === 0 && conCheck == true) {
          conRollModEl.text("+" + 0);
        }
        else if (conMod < 0 && conCheck == false) {
          conRollModEl.text(conMod);
        }
        else if ((conMod + profMod) < 0 && conCheck == true) {
          conRollModEl.text(conMod + profMod);
        }
    }
    function changeIntMod() {
      const intRollModEl = $('.js-intRollMod')
      const intCheckEl = $('.js-intCheck')
      const intCheck = intCheckEl.is(":checked");
        if (intMod > 0 && intCheck == false) {
          intRollModEl.text("+" + intMod);
        }
        else if ((intMod === 0) && intCheck == false) {
          intRollModEl.text("+" + 0);
        }
        else if ((intMod + profMod) > 0 && intCheck == true) {
          intRollModEl.text("+" + (intMod + profMod));
        }
        else if ((intMod + profMod) === 0 && intCheck == true) {
          intRollModEl.text("+" + 0);
        }
        else if (intMod < 0 && intCheck == false) {
          intRollModEl.text(intMod);
        }
        else if ((intMod + profMod) < 0 && intCheck == true) {
          intRollModEl.text(intMod + profMod);
        }
    }
    function changeWisMod() {
      const wisRollModEl = $('.js-wisRollMod')
      const wisCheckEl = $('.js-wisCheck')
      const wisCheck = wisCheckEl.is(":checked");
        if (wisMod > 0 && wisCheck == false) {
          wisRollModEl.text("+" + wisMod);
        }
        else if ((wisMod === 0) && wisCheck == false) {
          wisRollModEl.text("+" + 0);
        }
        else if ((wisMod + profMod) > 0 && wisCheck == true) {
          wisRollModEl.text("+" + (wisMod + profMod));
        }
        else if ((wisMod + profMod) === 0 && wisCheck == true) {
          wisRollModEl.text("+" + 0);
        }
        else if (wisMod < 0 && wisCheck == false) {
          wisRollModEl.text(wisMod);
        }
        else if ((wisMod + profMod) < 0 && wisCheck == true) {
          wisRollModEl.text(wisMod + profMod);
        }
    }
    function changeChaMod() {
      const chaRollModEl = $('.js-chaRollMod')
      const chaCheckEl = $('.js-chaCheck')
      const chaCheck = chaCheckEl.is(":checked");
        if (chaMod > 0 && chaCheck == false) {
          chaRollModEl.text("+" + chaMod);
        }
        else if ((chaMod === 0) && chaCheck == false) {
          chaRollModEl.text("+" + 0);
        }
        else if ((chaMod + profMod) > 0 && chaCheck == true) {
          chaRollModEl.text("+" + (chaMod + profMod));
        }
        else if ((chaMod + profMod) === 0 && chaCheck == true) {
          chaRollModEl.text("+" + 0);
        }
        else if (chaMod < 0 && chaCheck == false) {
          chaRollModEl.text(chaMod);
        }
        else if ((chaMod + profMod) < 0 && chaCheck == true) {
          chaRollModEl.text(chaMod + profMod);
        }
    }
    changeStrMod();
    changeDexMod();
    changeConMod();
    changeIntMod();
    changeWisMod();
    changeChaMod();
    changePassPerc();

}

function changeSkillMod() {
    function changeAcroMod() {
        const acroModEl = $('.js-acroMod')
        const acroCheckEl = $('.js-acroCheck')
        const acroCheck = acroCheckEl.is(":checked change");
          if (dexMod > 0 && acroCheck == false) {
            acroModEl.text("+" + dexMod);
          }
          else if ((dexMod === 0) && acroCheck == false) {
            acroModEl.text("+" + 0);
          }
          else if ((dexMod + profMod) > 0 && acroCheck == true) {
            acroModEl.text("+" + (dexMod + profMod));
          }
          else if ((dexMod + profMod) === 0 && acroCheck == true) {
            acroModEl.text("+" + 0);
          }
          else if (dexMod < 0 && acroCheck == false) {
            acroModEl.text(dexMod);
          }
          else if ((dexMod + profMod) < 0 && acroCheck == true) {
            acroModEl.text(dexMod + profMod);
          }
        }
    function changeSleiMod() {
        const sleiModEl = $('.js-sleiMod')
        const sleiCheckEl = $('.js-sleiCheck')
        const sleiCheck = sleiCheckEl.is(":checked");
          if (dexMod > 0 && sleiCheck == false) {
            sleiModEl.text("+" + dexMod);
          }
          else if ((dexMod === 0) && sleiCheck == false) {
            sleiModEl.text("+" + 0);
          }
          else if ((dexMod + profMod) > 0 && sleiCheck == true) {
            sleiModEl.text("+" + (dexMod + profMod));
          }
          else if ((dexMod + profMod) === 0 && sleiCheck == true) {
            sleiModEl.text("+" + 0);
          }
          else if (dexMod < 0 && sleiCheck == false) {
            sleiModEl.text(dexMod);
          }
          else if ((dexMod + profMod) < 0 && sleiCheck == true) {
            sleiModEl.text(dexMod + profMod);
          }
        }
    function changeSteaMod() {
        const steaModEl = $('.js-steaMod')
        const steaCheckEl = $('.js-steaCheck')
        const steaCheck = steaCheckEl.is(":checked");
          if (dexMod > 0 && steaCheck == false) {
            steaModEl.text("+" + dexMod);
          }
          else if ((dexMod === 0) && steaCheck == false) {
            steaModEl.text("+" + 0);
          }
          else if ((dexMod + profMod) > 0 && steaCheck == true) {
            steaModEl.text("+" + (dexMod + profMod));
          }
          else if ((dexMod + profMod) === 0 && steaCheck == true) {
            steaModEl.text("+" + 0);
          }
          else if (dexMod < 0 && steaCheck == false) {
            steaModEl.text(dexMod);
          }
          else if ((dexMod + profMod) < 0 && steaCheck == true) {
            steaModEl.text(dexMod + profMod);
          }
        }
    function changeAnimMod() {
        const animModEl = $('.js-animMod')
        const animCheckEl = $('.js-animCheck')
        const animCheck = animCheckEl.is(":checked");
          if (wisMod > 0 && animCheck == false) {
            animModEl.text("+" + wisMod);
          }
          else if ((wisMod === 0) && animCheck == false) {
            animModEl.text("+" + 0);
          }
          else if ((wisMod + profMod) > 0 && animCheck == true) {
            animModEl.text("+" + (wisMod + profMod));
          }
          else if ((wisMod + profMod) === 0 && animCheck == true) {
            animModEl.text("+" + 0);
          }
          else if (wisMod < 0 && animCheck == false) {
            animModEl.text(wisMod);
          }
          else if ((wisMod + profMod) < 0 && animCheck == true) {
            animModEl.text(wisMod + profMod);
          }
        }
    function changeInsiMod() {
        const insiModEl = $('.js-insiMod')
        const insiCheckEl = $('.js-insiCheck')
        const insiCheck = insiCheckEl.is(":checked");
          if (wisMod > 0 && insiCheck == false) {
            insiModEl.text("+" + wisMod);
          }
          else if ((wisMod === 0) && insiCheck == false) {
            insiModEl.text("+" + 0);
          }
          else if ((wisMod + profMod) > 0 && insiCheck == true) {
            insiModEl.text("+" + (wisMod + profMod));
          }
          else if ((wisMod + profMod) === 0 && insiCheck == true) {
            insiModEl.text("+" + 0);
          }
          else if (wisMod < 0 && insiCheck == false) {
            insiModEl.text(wisMod);
          }
          else if ((wisMod + profMod) < 0 && insiCheck == true) {
            insiModEl.text(wisMod + profMod);
          }
        }
    function changeMediMod() {
        const mediModEl = $('.js-mediMod')
        const mediCheckEl = $('.js-mediCheck')
        const mediCheck = mediCheckEl.is(":checked");
          if (wisMod > 0 && mediCheck == false) {
            mediModEl.text("+" + wisMod);
          }
          else if ((wisMod === 0) && mediCheck == false) {
            mediModEl.text("+" + 0);
          }
          else if ((wisMod + profMod) > 0 && mediCheck == true) {
            mediModEl.text("+" + (wisMod + profMod));
          }
          else if ((wisMod + profMod) === 0 && mediCheck == true) {
            mediModEl.text("+" + 0);
          }
          else if (wisMod < 0 && mediCheck == false) {
            mediModEl.text(wisMod);
          }
          else if ((wisMod + profMod) < 0 && mediCheck == true) {
            mediModEl.text(wisMod + profMod);
          }
        }
    function changePercMod() {
        const percModEl = $('.js-percMod')
        const percCheckEl = $('.js-percCheck')
        const percCheck = percCheckEl.is(":checked");
          if (wisMod > 0 && percCheck == false) {
            percModEl.text("+" + wisMod);
          }
          else if ((wisMod === 0) && percCheck == false) {
            percModEl.text("+" + 0);
          }
          else if ((wisMod + profMod) > 0 && percCheck == true) {
            percModEl.text("+" + (wisMod + profMod));
          }
          else if ((wisMod + profMod) === 0 && percCheck == true) {
            percModEl.text("+" + 0);
          }
          else if (wisMod < 0 && percCheck == false) {
            percModEl.text(wisMod);
          }
          else if ((wisMod + profMod) < 0 && percCheck == true) {
            percModEl.text(wisMod + profMod);
          }
        }
    function changeSurvMod() {
        const survModEl = $('.js-survMod')
        const survCheckEl = $('.js-survCheck')
        const survCheck = survCheckEl.is(":checked");
          if (wisMod > 0 && survCheck == false) {
            survModEl.text("+" + wisMod);
          }
          else if ((wisMod === 0) && survCheck == false) {
            survModEl.text("+" + 0);
          }
          else if ((wisMod + profMod) > 0 && survCheck == true) {
            survModEl.text("+" + (wisMod + profMod));
          }
          else if ((wisMod + profMod) === 0 && survCheck == true) {
            survModEl.text("+" + 0);
          }
          else if (wisMod < 0 && survCheck == false) {
            survModEl.text(wisMod);
          }
          else if ((wisMod + profMod) < 0 && survCheck == true) {
            survModEl.text(wisMod + profMod);
          }
        }
    function changeArcaMod() {
        const arcaModEl = $('.js-arcaMod')
        const arcaCheckEl = $('.js-arcaCheck')
        const arcaCheck = arcaCheckEl.is(":checked");
          if (intMod > 0 && arcaCheck == false) {
            arcaModEl.text("+" + intMod);
          }
          else if ((intMod === 0) && arcaCheck == false) {
            arcaModEl.text("+" + 0);
          }
          else if ((intMod + profMod) > 0 && arcaCheck == true) {
            arcaModEl.text("+" + (intMod + profMod));
          }
          else if ((intMod + profMod) === 0 && arcaCheck == true) {
            arcaModEl.text("+" + 0);
          }
          else if (intMod < 0 && arcaCheck == false) {
            arcaModEl.text(intMod);
          }
          else if ((intMod + profMod) < 0 && arcaCheck == true) {
            arcaModEl.text(intMod + profMod);
          }
        }
    function changeHistMod() {
        const histModEl = $('.js-histMod')
        const histCheckEl = $('.js-histCheck')
        const histCheck = histCheckEl.is(":checked");
          if (intMod > 0 && histCheck == false) {
            histModEl.text("+" + intMod);
          }
          else if ((intMod === 0) && histCheck == false) {
            histModEl.text("+" + 0);
          }
          else if ((intMod + profMod) > 0 && histCheck == true) {
            histModEl.text("+" + (intMod + profMod));
          }
          else if ((intMod + profMod) === 0 && histCheck == true) {
            histModEl.text("+" + 0);
          }
          else if (intMod < 0 && histCheck == false) {
            histModEl.text(intMod);
          }
          else if ((intMod + profMod) < 0 && histCheck == true) {
            histModEl.text(intMod + profMod);
          }
        }
    function changeInveMod() {
        const inveModEl = $('.js-inveMod')
        const inveCheckEl = $('.js-inveCheck')
        const inveCheck = inveCheckEl.is(":checked");
          if (intMod > 0 && inveCheck == false) {
            inveModEl.text("+" + intMod);
          }
          else if ((intMod === 0) && inveCheck == false) {
            inveModEl.text("+" + 0);
          }
          else if ((intMod + profMod) > 0 && inveCheck == true) {
            inveModEl.text("+" + (intMod + profMod));
          }
          else if ((intMod + profMod) === 0 && inveCheck == true) {
            inveModEl.text("+" + 0);
          }
          else if (intMod < 0 && inveCheck == false) {
            inveModEl.text(intMod);
          }
          else if ((intMod + profMod) < 0 && inveCheck == true) {
            inveModEl.text(intMod + profMod);
          }
        }
    function changeNatuMod() {
        const natuModEl = $('.js-natuMod')
        const natuCheckEl = $('.js-natuCheck')
        const natuCheck = natuCheckEl.is(":checked");
          if (intMod > 0 && natuCheck == false) {
            natuModEl.text("+" + intMod);
          }
          else if ((intMod === 0) && natuCheck == false) {
            natuModEl.text("+" + 0);
          }
          else if ((intMod + profMod) > 0 && natuCheck == true) {
            natuModEl.text("+" + (intMod + profMod));
          }
          else if ((intMod + profMod) === 0 && natuCheck == true) {
            natuModEl.text("+" + 0);
          }
          else if (intMod < 0 && natuCheck == false) {
            natuModEl.text(intMod);
          }
          else if ((intMod + profMod) < 0 && natuCheck == true) {
            natuModEl.text(intMod + profMod);
          }
        }
    function changeReliMod() {
        const reliModEl = $('.js-reliMod')
        const reliCheckEl = $('.js-reliCheck')
        const reliCheck = reliCheckEl.is(":checked");
          if (intMod > 0 && reliCheck == false) {
            reliModEl.text("+" + intMod);
          }
          else if ((intMod === 0) && reliCheck == false) {
            reliModEl.text("+" + 0);
          }
          else if ((intMod + profMod) > 0 && reliCheck == true) {
            reliModEl.text("+" + (intMod + profMod));
          }
          else if ((intMod + profMod) === 0 && reliCheck == true) {
            reliModEl.text("+" + 0);
          }
          else if (intMod < 0 && reliCheck == false) {
            reliModEl.text(intMod);
          }
          else if ((intMod + profMod) < 0 && reliCheck == true) {
            reliModEl.text(intMod + profMod);
          }
        }
    function changeAthlMod() {
        const athlModEl = $('.js-athlMod')
        const athlCheckEl = $('.js-athlCheck')
        const athlCheck = athlCheckEl.is(":checked");
          if (strMod > 0 && athlCheck == false) {
            athlModEl.text("+" + strMod);
          }
          else if ((strMod === 0) && athlCheck == false) {
            athlModEl.text("+" + 0);
          }
          else if ((strMod + profMod) > 0 && athlCheck == true) {
            athlModEl.text("+" + (strMod + profMod));
          }
          else if ((strMod + profMod) === 0 && athlCheck == true) {
            athlModEl.text("+" + 0);
          }
          else if (strMod < 0 && athlCheck == false) {
            athlModEl.text(strMod);
          }
          else if ((strMod + profMod) < 0 && athlCheck == true) {
            athlModEl.text(strMod + profMod);
          }
        }
    function changeDeceMod() {
        const deceModEl = $('.js-deceMod')
        const deceCheckEl = $('.js-deceCheck')
        const deceCheck = deceCheckEl.is(":checked");
          if (chaMod > 0 && deceCheck == false) {
            deceModEl.text("+" + chaMod);
          }
          else if ((chaMod === 0) && deceCheck == false) {
            deceModEl.text("+" + 0);
          }
          else if ((chaMod + profMod) > 0 && deceCheck == true) {
            deceModEl.text("+" + (chaMod + profMod));
          }
          else if ((chaMod + profMod) === 0 && deceCheck == true) {
            deceModEl.text("+" + 0);
          }
          else if (chaMod < 0 && deceCheck == false) {
            deceModEl.text(chaMod);
          }
          else if ((chaMod + profMod) < 0 && deceCheck == true) {
            deceModEl.text(chaMod + profMod);
          }
        }
    function changeIntiMod() {
        const intiModEl = $('.js-intiMod')
        const intiCheckEl = $('.js-intiCheck')
        const intiCheck = intiCheckEl.is(":checked");
          if (chaMod > 0 && intiCheck == false) {
            intiModEl.text("+" + chaMod);
          }
          else if ((chaMod === 0) && intiCheck == false) {
            intiModEl.text("+" + 0);
          }
          else if ((chaMod + profMod) > 0 && intiCheck == true) {
            intiModEl.text("+" + (chaMod + profMod));
          }
          else if ((chaMod + profMod) === 0 && intiCheck == true) {
            intiModEl.text("+" + 0);
          }
          else if (chaMod < 0 && intiCheck == false) {
            intiModEl.text(chaMod);
          }
          else if ((chaMod + profMod) < 0 && intiCheck == true) {
            intiModEl.text(chaMod + profMod);
          }
        }
    function changePerfMod() {
        const perfModEl = $('.js-perfMod')
        const perfCheckEl = $('.js-perfCheck')
        const perfCheck = perfCheckEl.is(":checked");
          if (chaMod > 0 && perfCheck == false) {
            perfModEl.text("+" + chaMod);
          }
          else if ((chaMod === 0) && perfCheck == false) {
            perfModEl.text("+" + 0);
          }
          else if ((chaMod + profMod) > 0 && perfCheck == true) {
            perfModEl.text("+" + (chaMod + profMod));
          }
          else if ((chaMod + profMod) === 0 && perfCheck == true) {
            perfModEl.text("+" + 0);
          }
          else if (chaMod < 0 && perfCheck == false) {
            perfModEl.text(chaMod);
          }
          else if ((chaMod + profMod) < 0 && perfCheck == true) {
            perfModEl.text(chaMod + profMod);
          }
        }
    function changePersMod() {
        const persModEl = $('.js-persMod')
        const persCheckEl = $('.js-persCheck')
        const persCheck = persCheckEl.is(":checked");
          if (chaMod > 0 && persCheck == false) {
            persModEl.text("+" + chaMod);
          }
          else if ((chaMod === 0) && persCheck == false) {
            persModEl.text("+" + 0);
          }
          else if ((chaMod + profMod) > 0 && persCheck == true) {
            persModEl.text("+" + (chaMod + profMod));
          }
          else if ((chaMod + profMod) === 0 && persCheck == true) {
            persModEl.text("+" + 0);
          }
          else if (chaMod < 0 && persCheck == false) {
            persModEl.text(chaMod);
          }
          else if ((chaMod + profMod) < 0 && persCheck == true) {
            persModEl.text(chaMod + profMod);
          }
        }
    changeAcroMod();
    changeSleiMod();
    changeSteaMod();
    changeAnimMod();
    changeInsiMod();
    changeMediMod();
    changePercMod();
    changeSurvMod();
    changeArcaMod();
    changeHistMod();
    changeInveMod();
    changeNatuMod();
    changeReliMod();
    changeAthlMod();
    changeDeceMod();
    changeIntiMod();
    changePerfMod();
    changePersMod();
    changePassPerc();
}


    



// Below is check box event function logic 
                                                          // NEEDS skill mod function!!
const checkboxEl = $('.js-checkbox')

$(checkboxEl).on('change', function(e) {
    changeThrowMod();
    changeSkillMod();
    changePassPerc(); 
});





// Allow numbers only in JS class (used for base attributes, etc..)
document.querySelector(".js-num-only").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});
// End JS number only

// Following function allows users to tab/indent inside a textarea
$(document).delegate('textarea', 'keydown', function(e) {
  const keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
    e.preventDefault();
    const start = $(this).get(0).selectionStart;
    const end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "\t"
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart =
    $(this).get(0).selectionEnd = start + 1;
  }
});
// End tab/indent with textarea function


checkIfLocallyStored();
changeMods();