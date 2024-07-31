function create_black_guy(e) {
    var s = _slicedToArray(e, 5),
      t = s[0],
      a = s[1],
      o = s[2],
      i = s[3],
      r = s[4],
      l = { looks: t, "unfamiliar names": a, descriptions: o };
    return (
      "string" == typeof i
        ? (l.race = i)
        : (i && i.length && (l.tags = i), r && (l.race = r)),
      toMap(l)
    );
  }
  function create_black_guys(e, s) {
    if (!window.GE.guy_database.has(e)) throw Error("Uninitialized agecat: " + e);
    var t = window.GE.guy_database.get(e);
    if (!t.has(s)) throw Error("Undefined type " + s + " for " + e);
    for (
      var a = t.get(s),
        o = arguments.length,
        i = new Array(o > 2 ? o - 2 : 0),
        r = 2;
      r < o;
      r++
    )
      i[r - 2] = arguments[r];
    for (var l = 0, n = i; l < n.length; l++) {
      var c = n[l],
        u = _toArray(c),
        p = u[0],
        d = u.slice(1),
        h = create_black_guy(d);
      a.set(p, h);
    }
  }
    create_black_guys(
      "genz",
      "chad",
      [
        "99",
        8,
        ["jock", "cocky-looking _guy"],
        ["a confident _guy", "a slim black _guy"],
        ["jock", "tall"],
        "black",
      ],
      [
        "98",
        10,
        ["total chad", "suave _guy"],
        ["a rizz and jizz-filled _guy", "a smooth _guy", "a fit _guy"],
        ["chad", "bully", "smells good"],
        "black",
      ],
      [
        "97",
        10,
        ["clean-cut _guy", "chad"],
        ["a _guy with a strong jawline", "a supremely confident man"],
        ["dominant", "smells good", "breeder"],
        "black",
      ],
      [
        "96",
        7,
        ["attractive Black _guy", "confident"],
        ["smooth-talking _guy"],
        ["agressive", "fuckboy"],
        "black",
      ]
    ),
    create_black_guys(
      "genz",
      "bad",
      [
        "99",
        5,
        ["stoner", "annoying _guy"],
        ["a _guy who looks like he hasn't showered this week"],
        ["annoying", "smelly"],
        "black",
      ],
      [
        "98",
        3,
        ["smart-looking _guy", " _guy"],
        ["a black _guy with a blue shirt"],
        ["nerd", "short"],
        "black",
      ],
      [
        "97",
        4,
        ["young _guy", "smug-looking _guy"],
        ["a _guy who looks a bit annoying"],
        ["annoying", "lazy"],
        "black",
      ],
      [
        "96",
        5,
        ["typical gen-Z guy"],
        ["an annoying-looking _guy"],
        ["short", "skinny"],
        "black",
      ]
    ),
    create_black_guys(
      "genz",
      "lad",
      [
        "99",
        5,
        ["relaxed-looking _guy"],
        ["a chill _guy"],
        ["skinny", "lazy"],
        "black",
      ],
      [
        "98",
        7,
        ["nice-looking _guy"],
        ["a _guy who you'd bring home to meet your parents"],
        ["gentlemen", "nice", "charming"],
        "black",
      ],
      [
        "97",
        8,
        ["hoodie _guy", "normal _guy"],
        ["a _guy who looks mostly normal"],
        ["fuckboy", "bully", "breeder"],
        "black",
      ],
      [
        "96",
        6,
        ["young _guy"],
        ["a cute and nerdy _guy"],
        ["nerd", "gentleman"],
        "black",
      ]
    ),
    create_black_guys(
      "genz",
      "coworker",
      [
        "99",
        8 ,
        ["clean-cut _guy", "smooth-talker"],
        ["a charming _guy"],
        ["charming", "fuckboy"],
        "black",
      ],
      [
        "98",
        7,
        ["smart-looking _guy"],
        ["a _guy with a chiseled jawline"],
        ["intelligent", "judgmental"],
        "black",
      ],
      [
        "97",
        6,
        ["smug bald _guy"],
        ["a young _guy in a business suit"],
        ["bald", "smug", "fuckboy"],
        "black",
      ],
      [
        "96",
        6,
        ["nerdy-looking _guy"],
        ["a cute _guy that looks like he'd be way too into Spider-Man"],
        ["skinny", "short", "nerd", "ambitious"],
        "black",
      ]
    ),
    create_black_guys(
      "genx",
      "chad",
      [
        "99",
        7,
        ["a bald barber",],
        ["a bald _guy who gives barber vibes"],
        ["bald", "charming", "gentleman"],
        "black",
      ],
      [
        "98",
        9,
        ["jock", "total chad"],
        ["a confident _guy", "a muscular _guy"],
        ["jock", "bully", "arrogant"],
        "black",
      ],
      [
        "97",
        10,
        ["stern _guy"],
        ["a _guy you wouldn't want to upset"],
        ["bully", "chad", "bald", "breeder"],
        "black",
      ],
      [
        "96",
        9,
        ["total chad"],
        ["a _guy that looks like he might be packing"],
        ["chad", "fuckboy"],
        "black",
      ]
    ),
    create_black_guys(
      "genx",
      "bad",
      [
        "99",
        3,
        ["has-been"],
        ["a weird _guy who's trying to stay relevant by wearing youngster apparel"],
        ["smelly", "annoying"],
        "black",
      ],
      [
        "98",
        2,
        ["geometrically obtuse"],
        ["a _guy who reminds you of your math professor"],
        ["chubby", "nerd"],
        "black",
      ],
      [
        "97",
        4,
        ["loser", "skinny _guy"],
        ["a _guy who is probably on something stronger than X-Change"],
        ["tall", "creepy"],
        "black",
      ],
      [
        "96",
        3,
        ["creepy _guy"],
        ["a _guy who looks like he enjoys hanging out in front of gas stations"],
        ["creepy", "tall", "skinny"],
        "black",
      ]
    ),
    create_black_guys(
      "genx",
      "lad",
      [
        "99",
        7,
        ["middle-aged _guy"],
        ["a smirking, confident-looking _guy"],
        ["jock", "fuckboy"],
        "black",
      ],
      [
        "98",
        4,
        ["strange _guy"],
        ["an annoying weird _guy"],
        ["smelly", "annoying", "smoker"],
        "black",
      ],
      [
        "97",
        8,
        ["relaxed-looking _guy"],
        ["a muscular _guy", "chill _guy"],
        ["chad", "jock", "smells good"],
        "black",
      ],
      [
        "96",
        6,
        ["athletic guy"],
        ["an athletic-looking middle-aged _guy"],
        ["jock", "bald"],
        "black",
      ]
    ),
    create_black_guys(
      "genx",
      "coworker",
      [
        "99",
        4,
        ["older man"],
        ["an older _guy with gray in his beard"],
        ["gentleman", "beard", "friendly"],
        "black",
      ],
      [
        "98",
        6,
        ["smart-looking _guy"],
        ["a _guy that looks like he forgot to return your stapler"],
        ["nerd", "lazy", "salesman"],
        "black",
      ],
      [
        "97",
        10,
        ["older executive"],
        ["a _guy with a huge ego"],
        ["executive", "breeder", "ambitious", "bully", "bald"],
        "black",
      ],
      [
        "96",
        7,
        ["chubby guy"],
        ["a chubby _guy with a piercing gaze"],
        ["chad", "chubby"],
        "black",
      ]
    ),
    create_black_guys(
      "millenial",
      "chad",
      [
        "99",
        9,
        ["jock shirtless _guy",],
        ["giving 'football player' vibes"],
        ["fuckboy", "chad", "jock", "agressive"],
        "black",
      ],
      [
        "98",
        8,
        ["suave"],
        ["a confident _guy"],
        ["chad", "tall"],
        "black",
      ],
      [
        "97",
        8,
        ["typical millenial"],
        ["a _guy your mama told you to stay away from"],
        ["tall", "bully"],
        "black",
      ],
      [
        "96",
        10,
        ["muscular _guy"],
        ["a stern looking _guy that doesn't look like he pulls out"],
        ["bully", "jock", "dominant", "bald", "breeder"],
        "black",
      ],
    ),
    create_black_guys(
      "millenial",
      "bad",
      [
        "99",
        3,
        ["creeper"],
        ["a weird _guy sticking his tongue out at you"],
        ["jerk", "annoying", "creepy"],
        "black",
      ],
      [
        "98",
        4,
        ["bald _guy"],
        ["a short bald _guy"],
        ["short", "smelly", "beard"],
        "black",
      ],
      [
        "97",
        4,
        ["_guy with a slightly creepy face"],
        ["a grinning _guy", "a skinny fuckboy"],
        ["skinny", "fuckboy"],
        "black",
      ],
      [
        "96",
        3,
        ["annoyingly nerdy _guy"],
        ["an annoying _guy who you think you've seen somewhere before"],
        ["nerd", "annoying", "mustache"],
        "black",
      ]
    ),
    create_black_guys(
      "millenial",
      "lad",
      [
        "99",
        6,
        ["normal-looking _guy"],
        ["a typical millenial _guy"],
        ["hat", "smells good"],
        "black",
      ],
      [
        "98",
        10,
        ["jock", "tough-looking _guy"],
        ["a confident _guy", "a muscular _guy"],
        ["jock", "bully"],
        "black",
      ],
      [
        "97",
        7,
        ["bearded _guy"],
        ["a kind of chubby _guy"],
        ["beard", "lazy", "chubby"],
        "black",
      ],
      [
        "96",
        9,
        ["tough-looking _guy"],
        ["a _guy who looks like he bullied you in highschool"],
        ["bully", "fuckboy", "breeder"],
        "black",
      ]
    ),
    create_black_guys(
      "millenial",
      "coworker",
      [
        "99",
        7,
        ["annoying salesman",],
        ["a serious looking _guy"],
        ["annoying", "salesman", "ambitious"],
        "black",
      ],
      [
        "98",
        7,
        ["smooth-looking _guy"],
        ["a _guy with a strong jawline and a charming smile"],
        ["ambitious", "slick", "playboy", "handsome"],
        "black",
      ],
      [
        "97",
        6,
        ["tough-looking _guy"],
        ["a tall tough-looking _guy"],
        ["bald", "bully", "tall"],
        "black",
      ],
      [
        "96",
        10,
        ["hot black executive"],
        ["a smoothing-looking black _guy"],
        ["executive", "intense", "chad", "rich", "fuckboy", "breeder"],
        "black",
      ]
    )
    var buildBlackCock = function (e, s, t, a, o, i, r, l) {
    return toMap({
      cock: e,
      ballsdesc: s,
      cockdesc: t,
      tipdesc: a,
      cockrating: o,
      cockfatness: i,
      cocklength: r,
      ballsize: l,
      cockimg: "img/minigame/masculinity/cocks/bbc/" + e + ".jpg",
    });
  };
    (window.GE.black_cock_database = [
    buildBlackCock(999, "full-looking", "curved", "mushroom-shaped", 8, 7, 9, 7),
    buildBlackCock(998, "twitching", "long", "shiny", 9, 8, 10, 7),
    buildBlackCock(997, "hefty", "huge", "mushroom-shaped", 9, 9, 10, 8),
    buildBlackCock(996, "smooth", "veiny", "round", 9, 10, 10, 8),
    buildBlackCock(995, "thick", "gigantic", "chunky", 10, 10, 10, 9),
    buildBlackCock(994, "tight", "curved", "sculpted", 8, 8, 8, 6),
    buildBlackCock(993, "full-looking", "fat", "round", 8, 10, 8, 7),
    buildBlackCock(992, "tight", "veiny", "bulbous", 8, 7, 9, 8),
    buildBlackCock(991, "thick", "curved", "uncircumcised", 9, 8, 9, 8),
    buildBlackCock(990, "dangling", "long", "shiny", 7, 5, 10, 7),
    buildBlackCock(989, "big", "thick", "sculpted", 8, 7, 9, 7),
    buildBlackCock(988, "tight", "veiny", "fat", 9, 8, 10, 7),
    buildBlackCock(987, "full-looking", "massive", "round", 8, 8, 10, 8),
    buildBlackCock(986, "dangling", "smooth", "mushroom-shaped", 6, 8, 6, 6),
    buildBlackCock(985, "hefty", "veiny", "thick", 8, 8, 9, 7),
    buildBlackCock(984, "smooth", "fat", "bloated", 7, 9, 6, 5),
    buildBlackCock(983, "full-looking", "veiny", "flared", 8, 6, 10, 9),
    buildBlackCock(982, "shaved", "long", "wide", 8, 9, 8, 8),
    buildBlackCock(981, "huge", "veiny", "un-cut", 9, 8, 10, 10),
    buildBlackCock(980, "baby factory", "like a horse", "throbbing", 10, 9, 10, 10),
    buildBlackCock(979, "tight", "long", "helmet-shaped", 8, 7, 9, 7),
    buildBlackCock(978, "swollen", "fat", "mushroom-shaped", 8, 10, 7, 8),
    buildBlackCock(977, "dangling", "smooth", "round", 8, 7, 10, 10),
    buildBlackCock(976, "bloated", "uncut", "uncircumcised", 7, 7, 7, 6),
    buildBlackCock(975, "tight", "veiny", "mushroom-shaped", 7, 7, 8, 7),
    buildBlackCock(974, "big", "thick", "throbbing", 9, 10, 8, 9),
    buildBlackCock(973, "thick", "long", "round", 8, 7, 9, 6),
    buildBlackCock(972, "smooth", "veiny", "glistening", 8, 8, 8, 9),
    buildBlackCock(971, "hefty", "fat", "thick", 8, 10, 7, 9),
    buildBlackCock(970, "baby factory", "massive", "wide", 10, 10, 10, 10)
    ])
    ;
