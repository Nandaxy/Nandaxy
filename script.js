$(document).ready(function () {
    const items = [
      {
        title: "Repository Debian 11",
        date: "13 mei 2024",
        viewLink: "/asset/file/sources.list.txt",
        downloadLink: "https://www.mediafire.com/file/elc94tvyln1mf48/sources.list.txt/file",
      },
      {
        title: "Script login Mikrotik",
        date: "12 februari 2024",
        viewLink: "https://www.mediafire.com/file/4fidad4p8bj5m81/hotspot.7z/file",
        downloadLink: "https://www.mediafire.com/file/4fidad4p8bj5m81/hotspot.7z/file",
      },
    ];
  
    function parseDate(dateStr) {
      const [day, month, year] = dateStr.split(" ");
      const months = {
        "januari": "01",
        "februari": "02",
        "maret": "03",
        "april": "04",
        "mei": "05",
        "juni": "06",
        "juli": "07",
        "agustus": "08",
        "september": "09",
        "oktober": "10",
        "november": "11",
        "desember": "12"
      };
      return new Date(`${year}-${months[month]}-${day}`);
    }
  
    function loadModalData(filteredItems = items) {
      const container = $("#modal-item-container");
      container.empty(); 
  
      filteredItems.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  
      filteredItems.forEach(item => {
        const itemHtml = `
          <div class="modal-item">
            <div class="modal-item-left">
              <div class="modal-item-left-icon">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm4 18H6V4h7v5h5z"
                    />
                  </svg>
                </span>
              </div>
              <div class="modal-item-left-meta">
                <p class="modal-item-left-meta-title">${item.title}</p>
                <p class="modal-item-left-meta-date">${item.date}</p>
              </div>
            </div>
            <div class="modal-item-right">
              <a href="${item.viewLink}" title="view target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  style="margin-top: 5px;"
                >
                  <path
                    fill="white"
                    d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                  />
                </svg>
              </a>
              <a href="${item.downloadLink}" title="download target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                  />
                </svg>
              </a>
            </div>
          </div>
        `;
  
        container.append(itemHtml);
      });
    }
  
    $("#openModal").click(function () {
      loadModalData(); 
      $("#modal").fadeIn();
      $("body").addClass("no-scroll");
    });
  
    $(".close").click(function () {
      $("#modal").fadeOut();
      $("body").removeClass("no-scroll"); 
    });
  
    $(window).click(function (event) {
      if (event.target.id === "modal") {
        $("#modal").fadeOut();
        $("body").removeClass("no-scroll"); 
      }
    });
  
    $("#search").on("input", function () {
      const searchTerm = $(this).val().toLowerCase();
  
      const filteredItems = items.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.date.toLowerCase().includes(searchTerm)
      );
  
      loadModalData(filteredItems);
    });
  });
  