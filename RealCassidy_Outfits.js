function remove_outfit(e, s, outfit_name) {
    // Construct the outfit ID
    var outfit_id = e + " " + s + " " + outfit_name;
  
    // Check if the character exists in the outfit database
    if (!window.GE.outfit_database.has(e))
      throw Error("Character " + e + " not initialized");
  
    // Check if the outfit category is valid
    if (!window.GE.outfit_categories.includes(s))
      throw Error("Unknown outfit category " + s);
  
    // Get the character's outfit category map
    var c = window.GE.outfit_database.get(e);
    var u = c.get(s);
  
    // Check if the outfit exists in the category
    if (!u.has(outfit_id))
      throw Error("Outfit with id " + outfit_id + " does not exist in " + e + "'s " + s + " outfits");
  
    // Remove the outfit from the map
    u.delete(outfit_id);
  }

// Remove cassidy's existing outfits that aren't being reused
remove_outfit("cassidy", "beach", "beach bum");
remove_outfit("cassidy", "beach", "beach skirt");
remove_outfit("cassidy", "beach", "blue bikini");
remove_outfit("cassidy", "beach", "blue plunge monokini");
remove_outfit("cassidy", "beach", "boardwalk babe");
remove_outfit("cassidy", "beach", "chained");
remove_outfit("cassidy", "beach", "cheap swimsuit");
remove_outfit("cassidy", "beach", "cheetah print bikini");
remove_outfit("cassidy", "beach", "cherries");
remove_outfit("cassidy", "beach", "comfy black bikini");
remove_outfit("cassidy", "beach", "criss cross strawberry");
remove_outfit("cassidy", "beach", "crochet bikini");
remove_outfit("cassidy", "beach", "durable bikini");
remove_outfit("cassidy", "beach", "extra cheetah print bikini");
remove_outfit("cassidy", "beach", "flower bikini");
remove_outfit("cassidy", "beach", "held up by magic");
remove_outfit("cassidy", "beach", "lacy swimsuit");
remove_outfit("cassidy", "beach", "lifeguard");
remove_outfit("cassidy", "beach", "neon yellow bikini");
remove_outfit("cassidy", "beach", "one piece");
remove_outfit("cassidy", "beach", "orange string bikini");
remove_outfit("cassidy", "beach", "patriotic");
remove_outfit("cassidy", "beach", "pink one piece");
remove_outfit("cassidy", "beach", "pink and yellow bikini");
remove_outfit("cassidy", "beach", "promo bikini");
remove_outfit("cassidy", "beach", "racer girl");
remove_outfit("cassidy", "beach", "red boutinela bikini");
remove_outfit("cassidy", "beach", "red strap bikini");
remove_outfit("cassidy", "beach", "red triangle top bikini");
remove_outfit("cassidy", "beach", "serene paradise");
remove_outfit("cassidy", "beach", "serious swim pro");
remove_outfit("cassidy", "beach", "slingshot halter bikini");
remove_outfit("cassidy", "beach", "slutty giraffe");
remove_outfit("cassidy", "beach", "snakeskin");
remove_outfit("cassidy", "beach", "sunbathing");
remove_outfit("cassidy", "beach", "tiny blue bikini");
remove_outfit("cassidy", "beach", "tiny one piece");
remove_outfit("cassidy", "beach", "triangle bikini");
remove_outfit("cassidy", "beach", "white string bikini");


// Add new outfits for cassidy
outfits(
    "cassidy",
    "beach",
    {
      "name": "bangbros",
      "flavor": "Bangbros? What does that mean?",
      "description": "pink low cut top that says 'I heart Bangbros'",
      "price": 100,
      "type": "slutty",
      "sluttiness": 8,
      "comfort": 6,
      "durability": 5,
      "style": "slutty",
      "tags": ["waterproof","chad magnet"],
      "colors": ["pink","white"], 
      "emphasizes": ["boobs", "butt"],
      "reveals": ["breasts","legs","asscheeks"],
      "panties under": false,
      "bra under": false,
      "breast support": 4,
      "locations": ["beach","casual"],
      "top": "pink low cut top",
      "bottom": "white boyshorts"
    },
    {
      "name": "beige cutout",
      "flavor": "This lovely beige outfit comes with a conveniently placed boob window.",
      "description": "beige bikini with boob window",
      "price": 120,
      "type": "bikini",
      "sluttiness": 6,
      "comfort": 5,
      "durability": 4,
      "style": "sexy",
      "tags": ["waterproof","fragile"],
      "colors": ["beige"], 
      "emphasizes": ["boobs", "cleavage"],
      "reveals": ["lots of cleavage","sideboob"],
      "panties under": false,
      "bra under": false,
      "breast support": 2,
      "locations": ["beach"],
      "top": "beige bikini top",
      "bottom": "beige bikini bottom"
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    },
    {
      "name": "",
      "flavor": ".",
      "description": "",
      "price": 100,
      "type": "",
      "sluttiness": 5,
      "comfort": 5,
      "durability": 5,
      "style": "",
      "tags": [""],
      "colors": [""], 
      "emphasizes": ["", ""],
      "reveals": ["",""],
      "panties under": false,
      "bra under": false,
      "breast support": 5,
      "locations": [""],
      // onepiece or top and bottom combo, not both (just a description)
      // onepiece: ""
      // top: ""
      // bottom: ""
      // shoes: "sandals" (if they're wearing shoes, duh.) (heels, flats, sneakers, whatever)
    }
)
