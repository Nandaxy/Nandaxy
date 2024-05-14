$(document).ready(function () {
  const items = [
    {
      title: "Repository Debian 11",
      date: "13 mei 2024",
      viewLink: "/asset/file/sources.list.txt",
      downloadLink:
        "https://www.mediafire.com/file/elc94tvyln1mf48/sources.list.txt/file",
    },
    {
      title: "Script login Mikrotik",
      date: "12 februari 2024",
      viewLink:
        "https://www.mediafire.com/file/4fidad4p8bj5m81/hotspot.7z/file",
      downloadLink:
        "https://www.mediafire.com/file/4fidad4p8bj5m81/hotspot.7z/file",
    },
  ];

  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split(" ");
    const months = {
      januari: "01",
      februari: "02",
      maret: "03",
      april: "04",
      mei: "05",
      juni: "06",
      juli: "07",
      agustus: "08",
      september: "09",
      oktober: "10",
      november: "11",
      desember: "12",
    };
    return new Date(`${year}-${months[month]}-${day}`);
  }

  function loadModalData(filteredItems = items) {
    const container = $("#modal-item-download-container");
    container.empty();

    filteredItems.sort((a, b) => parseDate(b.date) - parseDate(a.date));

    filteredItems.forEach((item) => {
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

  $("#openModalDownload").click(function () {
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

    const filteredItems = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.date.toLowerCase().includes(searchTerm)
    );

    loadModalData(filteredItems);
  });

  // modal pesan
  const _0x1eb98b = _0x4449;
  (function (_0x582f13, _0x63b75b) {
    const _0x481513 = _0x4449,
      _0x102780 = _0x582f13();
    while (!![]) {
      try {
        const _0x4ace6e =
          (parseInt(_0x481513(0x11a)) / (-0xfd6 + 0xf1b + 0x2 * 0x5e)) *
            (parseInt(_0x481513(0x137)) /
              (0x71 * -0x3b + 0xa * -0x22c + 0x2fc5)) +
          (parseInt(_0x481513(0x127)) / (0x17bd + -0x190 + -0x162a)) *
            (-parseInt(_0x481513(0x106)) / (-0x20f0 + 0x100f + 0x10e5)) +
          parseInt(_0x481513(0x130)) / (-0xa99 + -0x1fb8 + 0x2a56) +
          (-parseInt(_0x481513(0x118)) /
            (-0x69a * -0x1 + -0x1 * 0x1f67 + 0x18d3)) *
            (parseInt(_0x481513(0x147)) /
              (-0x11 * -0x8b + -0x7 * -0x472 + -0x2852)) +
          (parseInt(_0x481513(0x13c)) /
            (0x1 * 0x1991 + -0x1a * 0x59 + 0x107f * -0x1)) *
            (parseInt(_0x481513(0x12e)) / (0x912 + -0x249b + -0xdc9 * -0x2)) +
          -parseInt(_0x481513(0xf4)) / (-0x17ab + -0x810 * 0x2 + 0x27d5) +
          (parseInt(_0x481513(0x122)) / (0xf6d + 0x1 * 0x1863 + -0x27c5)) *
            (parseInt(_0x481513(0xf1)) /
              (0x1bff * -0x1 + 0x2010 + 0x93 * -0x7));
        if (_0x4ace6e === _0x63b75b) break;
        else _0x102780["push"](_0x102780["shift"]());
      } catch (_0x5b2399) {
        _0x102780["push"](_0x102780["shift"]());
      }
    }
  })(_0x56d4, -0x6cdca + 0x7b64e + -0x27 * -0x148b);
  const botToken =
      _0x1eb98b(0x132) +
      _0x1eb98b(0x141) +
      _0x1eb98b(0x111) +
      _0x1eb98b(0xf7) +
      _0x1eb98b(0x125),
    chatId = _0x1eb98b(0x10c);
  function _0x4449(_0x1481b4, _0x3f1327) {
    const _0x3d3c04 = _0x56d4();
    return (
      (_0x4449 = function (_0x42651a, _0x231a6d) {
        _0x42651a = _0x42651a - (0x3b * 0x3b + 0x76f + -0x141a);
        let _0x5158af = _0x3d3c04[_0x42651a];
        return _0x5158af;
      }),
      _0x4449(_0x1481b4, _0x3f1327)
    );
  }
  $(_0x1eb98b(0x144) + _0x1eb98b(0x11c))[_0x1eb98b(0x13b)](function () {
    const _0x21975e = _0x1eb98b,
      _0x512e40 = {
        jhaAg: _0x21975e(0x140),
        Bpjgw: function (_0x373fa1, _0x119df1) {
          return _0x373fa1(_0x119df1);
        },
        zscQe: _0x21975e(0x11d) + _0x21975e(0x13f),
        DFIvs: function (_0x4ff63e, _0x52e7d4) {
          return _0x4ff63e(_0x52e7d4);
        },
        ekcIC: _0x21975e(0x124),
        rJXHN: _0x21975e(0xf0),
      };
    console[_0x21975e(0x129)](_0x512e40[_0x21975e(0xf2)]),
      _0x512e40[_0x21975e(0xfa)]($, _0x512e40[_0x21975e(0xfd)])[
        _0x21975e(0x119)
      ](),
      _0x512e40[_0x21975e(0x134)]($, _0x512e40[_0x21975e(0x120)])[
        _0x21975e(0x102)
      ](_0x512e40[_0x21975e(0x10f)]);
  }),
    $(_0x1eb98b(0x126) + _0x1eb98b(0x13f))[_0x1eb98b(0x13b)](function () {
      const _0x35c861 = _0x1eb98b,
        _0x158bad = {
          gfSFr: function (_0x7a81bc, _0x41623d) {
            return _0x7a81bc(_0x41623d);
          },
          exdSX: _0x35c861(0x11d) + _0x35c861(0x13f),
          GgHnl: function (_0xd8ceac, _0x3a792d) {
            return _0xd8ceac(_0x3a792d);
          },
          Hqulf: _0x35c861(0x124),
          lJGCd: _0x35c861(0xf0),
        };
      _0x158bad[_0x35c861(0x116)]($, _0x158bad[_0x35c861(0x135)])[
        _0x35c861(0x108)
      ](),
        _0x158bad[_0x35c861(0x121)]($, _0x158bad[_0x35c861(0xef)])[
          _0x35c861(0xf9) + "s"
        ](_0x158bad[_0x35c861(0x110)]);
    }),
    $(_0x1eb98b(0x138) + "ge")[_0x1eb98b(0x13b)](function () {
      const _0x3339d2 = _0x1eb98b,
        _0x20bdeb = {
          TrPcF: function (_0x11a203, _0x3f0eb4) {
            return _0x11a203(_0x3f0eb4);
          },
          BIfaU: _0x3339d2(0x128) + _0x3339d2(0x103) + _0x3339d2(0x143),
          jyXlA: _0x3339d2(0x142),
          CxcSC: _0x3339d2(0x11d) + _0x3339d2(0x13f),
          TNEuh: function (_0x357a4a, _0x42d448) {
            return _0x357a4a(_0x42d448);
          },
          opBab: _0x3339d2(0x124),
          TJEgb: _0x3339d2(0xf0),
          YpvUx: function (_0x2db3e4, _0x1bcfe5) {
            return _0x2db3e4(_0x1bcfe5);
          },
          itYct:
            _0x3339d2(0x12f) +
            _0x3339d2(0x104) +
            _0x3339d2(0x139) +
            _0x3339d2(0x123),
          vbMmE: _0x3339d2(0x115),
          FytrD: _0x3339d2(0x12a) + "ed",
          SAEDn: function (_0x4c4732, _0xcae8ae) {
            return _0x4c4732(_0xcae8ae);
          },
          uIdTO: function (_0x354b49, _0x15feae) {
            return _0x354b49(_0x15feae);
          },
          vtwNA: _0x3339d2(0x138) + "ge",
          YFjLU: function (_0x2439cc, _0x17e392) {
            return _0x2439cc === _0x17e392;
          },
          WQPuk: function (_0x3eb713, _0xc25d71) {
            return _0x3eb713(_0xc25d71);
          },
          fmWoF: _0x3339d2(0x146) + _0x3339d2(0x13d) + _0x3339d2(0x113),
          Btinh: _0x3339d2(0x10d),
          oMIPG: _0x3339d2(0xfe) + _0x3339d2(0x11f),
        },
        _0x30ed8f = _0x20bdeb[_0x3339d2(0x11e)]($, _0x20bdeb[_0x3339d2(0xf3)])[
          _0x3339d2(0xf5)
        ](),
        _0x476b83 = _0x20bdeb[_0x3339d2(0xf6)]($, _0x20bdeb[_0x3339d2(0x133)]);
      if (_0x20bdeb[_0x3339d2(0xf8)](_0x30ed8f[_0x3339d2(0x107)](), "")) {
        _0x20bdeb[_0x3339d2(0x105)](alert, _0x20bdeb[_0x3339d2(0x13e)]);
        return;
      }
      _0x476b83[_0x3339d2(0x136)](_0x20bdeb[_0x3339d2(0x11b)], !![]),
        _0x476b83[_0x3339d2(0x102)](_0x20bdeb[_0x3339d2(0xff)]),
        $[_0x3339d2(0xfc)]({
          url:
            _0x3339d2(0x12d) +
            _0x3339d2(0x10e) +
            _0x3339d2(0x145) +
            botToken +
            (_0x3339d2(0xee) + "ge"),
          method: _0x20bdeb[_0x3339d2(0x101)],
          contentType: _0x20bdeb[_0x3339d2(0x131)],
          data: JSON[_0x3339d2(0x13a)]({
            chat_id: chatId,
            text: _0x3339d2(0xfb) + _0x3339d2(0x10a) + _0x30ed8f,
          }),
          success: function (_0x1d402d) {
            const _0x45a64f = _0x3339d2;
            _0x20bdeb[_0x45a64f(0x109)](alert, _0x20bdeb[_0x45a64f(0x12c)]),
              _0x20bdeb[_0x45a64f(0x109)]($, _0x20bdeb[_0x45a64f(0xf3)])[
                _0x45a64f(0xf5)
              ](""),
              _0x20bdeb[_0x45a64f(0x109)]($, _0x20bdeb[_0x45a64f(0x114)])[
                _0x45a64f(0x108)
              ](),
              _0x20bdeb[_0x45a64f(0x117)]($, _0x20bdeb[_0x45a64f(0x12b)])[
                _0x45a64f(0xf9) + "s"
              ](_0x20bdeb[_0x45a64f(0x112)]);
          },
          error: function (_0x237e1e, _0xc93125, _0x206ad3) {
            const _0x5510df = _0x3339d2;
            _0x20bdeb[_0x5510df(0x100)](alert, _0x20bdeb[_0x5510df(0x10b)]);
          },
          complete: function () {
            const _0x40ee0d = _0x3339d2;
            _0x476b83[_0x40ee0d(0x136)](_0x20bdeb[_0x40ee0d(0x11b)], ![]),
              _0x476b83[_0x40ee0d(0xf9) + "s"](_0x20bdeb[_0x40ee0d(0xff)]);
          },
        });
    });
  function _0x56d4() {
    const _0xb127eb = [
      "FytrD",
      "YpvUx",
      "Btinh",
      "addClass",
      "asil\x20dikir",
      "salahan,\x20s",
      "WQPuk",
      "761024oBQVfc",
      "trim",
      "fadeOut",
      "TrPcF",
      "im\x20:\x20",
      "itYct",
      "1216230336",
      "POST",
      "i.telegram",
      "rJXHN",
      "lJGCd",
      "E5rcwntaPF",
      "TJEgb",
      "song!",
      "CxcSC",
      "disabled",
      "gfSFr",
      "TNEuh",
      "637500bzoTEf",
      "fadeIn",
      "8CmiJMy",
      "vbMmE",
      "Message",
      "#modalMess",
      "SAEDn",
      "n/json",
      "ekcIC",
      "GgHnl",
      "55KHSMeJ",
      "a\x20lagi.",
      "body",
      "Vuk5EA",
      "#closeMess",
      "6BYsPPe",
      "Pesan\x20berh",
      "log",
      "btn-disabl",
      "opBab",
      "BIfaU",
      "https://ap",
      "9gLqHgv",
      "Terjadi\x20ke",
      "388855CwJbKA",
      "oMIPG",
      "7122138934",
      "vtwNA",
      "DFIvs",
      "exdSX",
      "prop",
      "12532IVSXVh",
      "#sendMessa",
      "ilakan\x20cob",
      "stringify",
      "click",
      "2353272NjfQsm",
      "k\x20boleh\x20ko",
      "fmWoF",
      "age",
      "diklik",
      ":AAFxfRizW",
      "#message",
      "im!",
      "#openModal",
      ".org/bot",
      "Pesan\x20tida",
      "21AdqNKb",
      "/sendMessa",
      "Hqulf",
      "no-scroll",
      "2518524ikQySd",
      "jhaAg",
      "jyXlA",
      "5075560KXrqPC",
      "val",
      "uIdTO",
      "bHbNJmxhIG",
      "YFjLU",
      "removeClas",
      "Bpjgw",
      "Pesan\x20Anon",
      "ajax",
      "zscQe",
      "applicatio",
    ];
    _0x56d4 = function () {
      return _0xb127eb;
    };
    return _0x56d4();
  }
});
