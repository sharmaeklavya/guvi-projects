const pageTitle = document.createElement("h1");
pageTitle.setAttribute("class", "text-center h5 pt-3");
pageTitle.innerHTML = "Callback Hell";

const container = document.createElement("div");
container.setAttribute("class", "container");
const row = document.createElement("div");
row.setAttribute("class", "row");
const col = document.createElement("div");
col.setAttribute(
  "class",
  "col-lg-12 d-flex justify-content-center align-items-center vh-100"
);

let text = document.createElement("div");
text.setAttribute("class", "textbox h1");
text.style.fontSize = "5rem";

col.append(text);
row.append(col);
container.append(row);
document.body.append(pageTitle, container);

let count = 10;

const timeOut = setTimeout(() => {
  text.innerHTML = count;

  setTimeout(() => {
    count--;
    text.innerHTML = count;

    setTimeout(() => {
      count--;
      text.innerHTML = count;

      setTimeout(() => {
        count--;
        text.innerHTML = count;

        setTimeout(() => {
          count--;
          text.innerHTML = count;

          setTimeout(() => {
            count--;
            text.innerHTML = count;

            setTimeout(() => {
              count--;
              text.innerHTML = count;

              setTimeout(() => {
                count--;
                text.innerHTML = count;

                setTimeout(() => {
                  count--;
                  text.innerHTML = count;

                  setTimeout(() => {
                    count--;
                    text.innerHTML = count;

                    setTimeout(() => {
                      text.style.color = "rgba(239, 68, 68)";
                      text.innerHTML = "Happy Independence Day";
                      //dfd
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 500);
