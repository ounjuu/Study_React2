const data = [
  {
    name: "김철수",
    age: 14,
    careers: [
      { title: "놀기" },
      { title: "먹기" },
      { title: "자기" },
      { title: "숨쉬기" },
    ],
    nickName: [
      { name: "김안철수" },
      { name: "김김안철수" },
      { name: "박터짐" },
    ],
  },
  {
    name: "영희",
    age: 35,
    careers: [
      { title: "놀기" },
      { title: "자전거타기" },
      { title: "오렌지먹기" },
      { title: "사과부시기" },
    ],
    nickName: [{ name: "김영희" }, { name: "야생사자" }, { name: "오올이" }],
  },
  {
    name: "박광철",
    age: 20,
    careers: [
      { title: "일수나가기" },
      { title: "돈빌려주기" },
      { title: "공무집행방해하기" },
      { title: "무면허운전하기" },
    ],
    nickName: [
      { name: "대흥역호랑이와사자두마리" },
      { name: "마포불주먹" },
      { name: "전설" },
      { name: "경찰의적" },
    ],
  },
];

// <!-- 1번쨰 -->
const allData = data.map((x, i) => {
  const career = x.careers.map((y) => {
    return y.title;
  });

  const nickName = x.nickName.map((y) => {
    return y.name;
  });

  const dataTbody = `<tr id="${i}" onclick="trClick('${x.name}')">
      <td>${x.name}</td>
      <td>${x.age}</td>
      <td>${career}</td>
      <td>${nickName}</td>
      </tr>`;

  return dataTbody;
});

const mainWrap = document.querySelector(".main-wrap");
mainWrap.innerHTML = `<table>
      <thead>
           <tr>
           <th>이름</th>
           <th>나이</th>
           <th>커리어</th>
           <th>별명</th>
          </tr>
          </thead>
          <tbody class=tbody>
              </tbody>
      </table>
      <div class="textWrap"></div>`;

const tbody = document.querySelector(".tbody");
tbody.innerHTML = allData.join("");

// <!-- 2번쨰 -->
const trClick = (name) => {
  const nameFilter = data.filter((x) => {
    return x.name === name;
  });
  const careers = nameFilter.map((x) => {
    return x.careers.map((y) => {
      return y.title;
    });
  });

  const nickName = nameFilter.map((x) => {
    return x.nickName.map((y) => {
      return y.name;
    });
  });
  let adult;

  const trClickData = nameFilter.flatMap((x) => {
    if (x.age > 19) {
      adult = "성인";
    } else {
      adult = "미성년자";
    }
    return `해당하는 사람의 이름은 ${x.name}입니다. 나이는 ${x.age}이고, ${adult}입니다. 커리어는 ${careers}가 있습니다. 별명은 ${nickName} 입니다.`;
  });
  return alert(trClickData);
};

// <!-- 3번째 -->
const notAdult = data.filter((x) => x.age < 19);
const notAdultText = notAdult.map((x) => {
  const nickName = x.nickName.map((y) => {
    return y.name;
  });

  const careers = x.careers.map((y) => {
    return y.title;
  });

  return `미성년자는 ${x.name}가 있고, 그 사람의 커리어는 ${careers} 입니다. 별명은 ${nickName} 입니다.`;
});
const textWrap = document.querySelector(".textWrap");
const makeDiv = document.createElement("div");
makeDiv.innerHTML = notAdultText;
textWrap.appendChild(makeDiv);

// 2.성인은 name,name 이 있고 name의 커리어는 career가 있으며 별며은
// nickName입니다.
const adult = data.filter((x) => x.age >= 19);
const adultText = adult.map((x) => {
  const nickName = x.nickName.map((y) => {
    return y.name;
  });

  const careers = x.careers.map((y) => {
    return y.title;
  });

  return `성인은 ${x.name}가 있고, 그 사람의 커리어는 ${careers} 입니다. 별명은 ${nickName} 입니다.`;
});

const makeDiv2 = document.createElement("div");
makeDiv2.innerHTML = adultText.join("");
textWrap.appendChild(makeDiv2);

//  3.별명중 가장 별명이 긴사람을 찾는 알고리즘을 만들어주세요.
const lengthData = data.flatMap((x) => {
  return x.nickName.map((y) => {
    return y.name;
  });
});
const longData = lengthData.reduce((acc, cur) => {
  return acc.length < cur.length ? cur : acc;
}, lengthData[0]);

const longPeople = data.filter((x) => {
  return x.nickName.some((y) => {
    return y.name === longData;
  });
});

const makeDiv3 = document.createElement("div");
makeDiv3.innerHTML = `별명이 가장 긴 사람은 ${longPeople[0].name}입니다.`;
textWrap.appendChild(makeDiv3);
