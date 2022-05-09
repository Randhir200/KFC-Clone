//   variable
  let addedPrice = JSON.parse(localStorage.getItem('addedPrice')) || 0;
  let totalItem = JSON.parse(localStorage.getItem('totalItem')) || 0;
  var kfcCartData = JSON.parse(localStorage.getItem('kfc-cart')) || [];
  document.querySelector('#cartvalue').innerText = kfcCartData.length;

  

  console.log(addedPrice);
  function changeActive() {
    var header = document.getElementById('menu');
    var btns = header.getElementsByClassName('btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }

  var matchDay_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33781-0.jpg?ver=14.71',
      name: 'Howzzat Biryani Combo',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '725.00',
      detail:
        'Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33783-0.jpg?ver=14.71',
      name: 'Super 6s Bucket Meal',
      type: 'Non veg',
      serve: 'Serves 3',
      price: '978.00',
      detail:
        'Save 21% on combo of 6 Hot & Crispy Chicken, 6 Strips, Medium Fries & Pepsi PET [serves 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33784-0.jpg?ver=14.71',
      name: 'Super 4s Bucket Meal',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '869.00',
      detail:
        'Enjoy 4 Hot & Crispy Chicken, 4 Strips, Medium Popcorn & Pepsi PET - save Rs. 79 [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33785-0.jpg?ver=14.71',
      name: 'Super 6s Bucket',
      type: 'Non veg',
      serve: 'Serves 3',
      price: '869.00',
      detail:
        'Save Rs. 203 on combo of 6 Hot & Crispy Chicken & 6 Strips [serves 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33786-0.jpg?ver=14.71',
      name: 'Super 4s Bucket',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '608.00',
      detail:
        'Flat Rs. 107 off on combo of 4 Hot & Crispy Chicken & 4 Strips [serves 2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33787-0.jpg?ver=14.71',
      name: 'Dream Team Bucket',
      type: 'Non veg',
      serve: 'Serves 3-4',
      price: '944.00',
      detail:
        'Leg before any wicket! Save 29% on 10 Leg Pieces & 4 Dips [serves 3-4]',
    },
  ];

  var chickenBucket_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-30637-40485.jpg?ver=14.71',
      name: 'Wednesday bucket',
      type: 'Non veg',
      serve: '',
      price: '734.00',
      detail: 'Flat 39% off on 10 pcs of Hot & Crispy Chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33652-42475.jpg?ver=14.71',
      name: 'Wednesday Strips Bucket',
      type: 'Non veg',
      serve: '',
      price: '368.00',
      detail:
        'Flat 55% off on 12 pc chicken strips served with 4 delicious dips',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32775-0.jpg?ver=14.71',
      name: '5pc Leg Piece Bucket Meal',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '650.00',
      detail:
        'Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-30870-0.jpg?ver=14.71',
      name: 'Friendship Bucket',
      type: 'Non veg',
      serve: 'Serves 3',
      price: '734.00',
      detail:
        'Save Rs. 172 on 3pc Hot & Crispy, 3 Hot Wings, 3 Chicken Strips & a Large Popcorn [serves 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-30908-0.jpg?ver=14.71',
      name: 'Bucket for Two',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '629.00',
      detail: 'Flat 39% off on 10 pcs of Hot & Crispy Chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32295-0.jpg?ver=14.71',
      name: '10 strips & 2 Dips Bucket',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '495.00',
      detail:
        'Flat Rs. 125 off on this dipping combo of 10 pc chicken strips & 2 delicious dips [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32774-0.jpg?ver=14.71',
      name: '5pc Leg Piece Bucket & 2 Dips',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '524.00',
      detail:
        'Save 22% on 5 chicken Leg Pieces, 2 dips, 1 Medium Fries & a Pepsi PET [serves 2 ]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32169-0.jpg?ver=14.71',
      name: 'Ultimate Savings Bucket',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '734.00',
      detail:
        'Save 35% on signature bucket of 4pc Hot & crispy, 6 Wings, 4 strips, 3 Dips & Pepsi PET [serves 2-3 ]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32293-0.jpg?ver=14.71',
      name: 'Big 12',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '755.00',
      detail:
        'Save 28% on 6pc Hot & Crispy Chicken, 6 Hot Wings & 2 dips [serves 2- 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-31946-0.jpg?ver=14.71',
      name: 'Mingles Bucket Meal',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '503.00',
      detail:
        'Save Rs. 71 on 4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fries & Pepsi PET [serves 2 ]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32197-0.jpg?ver=14.71',
      name: 'Big 8',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '719.00',
      detail:
        'Save 29% on this variety bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red chicken [serves 2- 3 ]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-31897-41326.jpg?ver=14.71',
      name: '5pc Smoky Red Chicken',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '524.00',
      detail: 'Flat 20% off on 5pc Smoky red grilled chicken [serves 2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-30640-40488.jpg?ver=14.71',
      name: '8 pc Hot & Crispy Chicken',
      type: 'Non veg',
      serve: 'Serves 3-4',
      price: '786.00',
      detail:
        'Save Rs. 182 & get 8pc signature Hot & crispy chicken [serves 3-4]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-30636-40484.jpg?ver=14.71',
      name: '6 Pc Hot & Crispy',
      type: 'Non veg',
      serve: 'Serves 2-3',
      price: '650.00',
      detail: 'Flat 10% off on 6pc signature Hot & crispy chicken [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-30865-0.jpg?ver=14.71',
      name: 'KFC Favorites',
      type: 'Non veg',
      serve: 'Serves 2',
      price: '440.00',
      detail:
        'Save 27% on this combo Chicken Zinger, Large Popcorn & 4pc Hot Wings [Serves 2]',
    },
  ];

  var biryaniBucket_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33517-0.jpg?ver=14.71',
      name: 'Classic Biryani Combo',
      type: 'Non-veg',
      serve: 'Serves 2-3',
      price: '777.00',
      detail:
        'Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33518-0.jpg?ver=14.71',
      name: 'Smoky Grilled Biryani Combo',
      type: 'Non-veg',
      serve: 'Serves 2-3',
      price: '777.00',
      detail:
        'Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33845-0.jpg?ver=14.71',
      name: 'Howzzat Biryani Combo',
      type: 'Non-veg',
      serve: 'Serves 2-3',
      price: '725.00',
      detail:
        'Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/A-33449-42353.jpg?ver=14.71',
      name: 'Classic Chicken Biryani Bucket (Large)',
      type: 'Non-veg',
      serve: 'Serves 2',
      price: '499.00',
      detail:
        'Large portions of Biryani rice served with 2 pc Hot & Crispy Chicken & 2 Gravies [serves 2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33450-42354.jpg?ver=14.71',
      name: 'Popcorn Chicken Biryani Bucket (Large)',
      type: 'Non-veg',
      serve: 'Serves 2',
      price: '499.00',
      detail:
        'Large portions of Biryani rice served with Chicken Popcorn & 2 Gravies [serves 2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33451-42355.jpg?ver=14.71',
      name: 'Smoky Grilled Biryani Bucket (Large)',
      type: 'Non-veg',
      serve: 'Serves 2',
      price: '499.00',
      detail:
        'Large portions of Biryani rice served with 2 pc Smoky Red Chicken & 2 Gravies [serves 2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33445-42349.jpg?ver=14.71',
      name: 'Classic Chicken Biryani Bucket',
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '241.00',
      detail:
        'Hyderabadi style Biryani rice served with 1 pc Hot & Crispy & Spicy Gravy [serves 1]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33446-42350.jpg?ver=14.71',
      name: 'Popcorn Chicken Biryani Bucket',
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '241.00',
      detail:
        'Hyderabadi style Biryani rice served with Popcorn & Spicy Gravy [serves 1]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33447-42351.jpg?ver=14.71',
      name: 'Smoky Grilled Biryani Bucket',
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '241.00',
      detail:
        'Hyderabadi style Biryani rice served with 1 pc Smoky Red & Spicy Gravy [serves 1]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33448-42352.jpg?ver=14.71',
      name: 'Veg Biryani Bucket',
      type: 'Veg',
      serve: 'Serves 1',
      price: '198.00',
      detail:
        'Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy [serves 1]',
    },
  ];

  var boxMeal_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32050-0.jpg?ver=14.71',
      name: 'All Chicken Box',
      type: 'Non-veg',
      serve: '',
      price: '199.00',
      detail:
        'A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32053-0.jpg?ver=14.71',
      name: 'Classic Zinger Box',
      type: 'Non-veg',
      serve: '',
      price: '329.00',
      detail:
        'A classic deal for Zinger lovers : Get 1 Classic Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32383-0.jpg?ver=14.71',
      name: 'Zinger Tandoori Box',
      type: 'Non-veg',
      serve: '',
      price: '329.00',
      detail:
        'A deal for the Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & Pepsi',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33527-0.jpg?ver=14.71',
      name: 'Popcorn Biryani Box',
      type: 'Non-veg',
      serve: '',
      price: '345.00',
      detail:
        'Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & Pepsi',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-32055-0.jpg?ver=14.71',
      name: 'Veg Zinger Box',
      type: 'Non-veg',
      serve: '',
      price: '329.00',
      detail:
        'A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & a Pepsi',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/A-33526-0.jpg?ver=14.71',
      name: 'Veg Biryani Box',
      type: 'Non-veg',
      serve: '',
      price: '293.00',
      detail:
        'Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & a Pepsi',
    },
  ];

  var burger_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32576-0.jpg?ver=14.71',
      name: '2 Chicken Krisper Burgers',
      type: 'Non-veg',
      serve: '',
      price: '240.00',
      detail: '2 delicious chicken value burgers - at only 109 each!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32573-0.jpg?ver=14.71',
      name: '2 Veg Krisper Burgers',
      type: 'Non-veg',
      serve: '',
      price: '166.00',
      detail: '2 delicious veg value burgers - at only 69 each!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32578-0.jpg?ver=14.71',
      name: 'Chicken & Krispers Combo',
      type: 'Non-veg',
      serve: '',
      price: '545.00',
      detail:
        'Deal combo of 2 chicken value burgers, 2 pc Hot & Crispy, 2 dips & a chilled Pepsi PET',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32579-0.jpg?ver=14.71',
      name: 'Veg-Non-Veg Krispers Combo',
      type: 'Non-veg',
      serve: '',
      price: '387.00',
      detail:
        'Pack of 4 burgers - 2 veg & 2 chicken value burgers at a deal price !',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32230-41486.jpg?ver=14.71',
      name: 'Tandoori Zinger Burger',
      type: 'Non-veg',
      serve: '',
      price: '209.00',
      detail: 'Chicken zinger with a delicious tandoori sauce',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32232-0.jpg?ver=14.71',
      name: 'Mixed Zinger Doubles',
      type: 'Non-veg',
      serve: '',
      price: '366.00',
      detail: 'Best-seller combo of classic chicken zinger & tandoori zinger',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30663-40505.jpg?ver=14.71',
      name: 'Classic Zinger Burger',
      type: 'Non-veg',
      serve: '',
      price: '199.00',
      detail:
        'Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32172-0.jpg?ver=14.71',
      name: 'Buddy Meal',
      type: 'Non-veg',
      serve: '',
      price: '524.00',
      detail:
        'Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32403-41750.jpg?ver=14.71',
      name: 'Veg Zinger Burger',
      type: 'Veg',
      serve: '',
      price: '188.00',
      detail:
        'Signature veg burger with crispy patties, veggies & a tangy sauce',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32574-0.jpg?ver=14.71',
      name: '2 Veg Krispers Meal',
      type: 'Veg',
      serve: '',
      price: '282.00',
      detail:
        '2 veg value burgers, crispy medium fries & 2 delicious dips at a deal price!',
    },
  ];

  var stayHomeSpecial_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33524-0.jpg?ver=14.71',
      name: 'Classic Biryani Combo',
      type: 'Non-veg',
      serve: 'Serves 2-3',
      price: '777.00',
      detail:
        'Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33525-0.jpg?ver=14.71',
      name: 'Smoky Grilled Biryani Combo',
      type: 'Non-veg',
      serve: 'Serves 2-3',
      price: '777.00',
      detail:
        'Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET [serves 2-3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33064-0.jpg?ver=14.71',
      name: 'Super Snacker Combo',
      type: 'Non-veg',
      serve: 'Serves 1-2',
      price: '473.00',
      detail:
        'Best of snacks with a Medium Popcorn, 4 strips, 1 dip & a chilled Pepsi Black [serves 1-2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33065-0.jpg?ver=14.71',
      name: 'Chick’n Wings Combo',
      type: 'Non-veg',
      serve: 'Serves 1-2',
      price: '473.00',
      detail:
        'Enjoy 2pc Hot & Crispy Chicken, 4 wings , 2 dips & a chilled Pepsi Black [serves 1-2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33519-0.jpg?ver=14.71',
      name: 'Stay Home Bucket',
      type: 'Non-veg',
      serve: 'Serves 3',
      price: '828.00',
      detail:
        'Save 21% on 4pc Hot & Crispy, 4 Wings, 6 Chicken Strips & 2 dips [serves 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33520-0.jpg?ver=14.71',
      name: 'Family Feast',
      type: 'Non-veg',
      serve: 'Serves 3',
      price: '870.00',
      detail:
        'Family Deal of 3 chicken zingers, a medium popcorn, medium fries & a chilled Pepsi PET [serves 3]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33066-0.jpg?ver=14.71',
      name: 'Classic Zinger Meal',
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '362.00',
      detail:
        'Favorite combo of Classic Zinger Burger, Medium Fries & a chilled Pepsi Black [serves 1]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33067-0.jpg?ver=14.71',
      name: "Chick'n Strips Solo Combo",
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '440.00',
      detail:
        'Go solo with 1 pc Hot & Crispy, 3 strips, Medium Fries & a chilled Pepsi Black [serves 1]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-33068-0.jpg?ver=14.71',
      name: "Chick'n Fries Solo Combo",
      type: 'Non-veg',
      serve: 'Serves 1',
      price: '440.00',
      detail:
        'Try this classic pairing of 2pc Hot & Crispy, Medium Fries, 2 Dips & a chilled Pepsi Black [serves 1]',
    },
  ];

  var snacks_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32841-42014.jpg?ver=14.71',
      name: 'Choco Mud Pie',
      type: 'Veg',
      serve: '',
      price: '135.00',
      detail:
        'Chocolate lovers unite! Say hello to our creamy chocolate & cake dessert- a must try!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32842-42015.jpg?ver=14.71',
      name: 'Coffee Mousse Cake',
      type: 'Veg',
      serve: '',
      price: '135.00',
      detail:
        "Coffee, chocolate, cake…what's not to love? Enjoy this for coffee-licious temptations!",
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31984-0.jpg?ver=14.71',
      name: 'Chicken & Fries Bucket',
      type: 'Non-veg',
      serve: '',
      price: '314.00',
      detail:
        'Save 37% on this favorite combo of 2pc Hot & Crispy chicken with Medium Fries',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31964-0.jpg?ver=14.71',
      name: 'Mingles Bucket',
      type: 'Non-veg',
      serve: 'Serves 1-2',
      price: '356.00',
      detail:
        'Save 13% on this mingle of 4 Wings, 2 Strips & a Reg Popcorn [serves 1-2]',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30678-40515.jpg?ver=14.71',
      name: '4pc Hot & Crispy Chicken',
      type: 'Non-veg',
      serve: '',
      price: '450.00',
      detail: '4 pcs of signature Hot & crispy chicken at a deal price',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30675-40512.jpg?ver=14.71',
      name: 'Large Popcorn',
      type: 'Non-veg',
      serve: '',
      price: '240.00',
      detail: 'Signature bite-sized boneless chicken, with special spices',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31867-41289.jpg?ver=14.71',
      name: 'Medium Popcorn',
      type: 'Non-veg',
      serve: '',
      price: '173.00',
      detail: 'Signature bite-sized boneless chicken, with special spices',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31866-41288.jpg?ver=14.71',
      name: 'Regular Popcorn',
      type: 'Non-veg',
      serve: '',
      price: '121.00',
      detail: 'Signature bite-sized boneless chicken, with special spices',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32287-41499.jpg?ver=14.71',
      name: 'Large Fries',
      type: 'Veg',
      serve: 'Serves 1',
      price: '125.00',
      detail: 'Jazz up your meal with crispy large fries!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31412-41042.jpg?ver=14.71',
      name: 'Medium Fries',
      type: 'Veg',
      serve: '',
      price: '104.00',
      detail: 'Jazz up your meal with crispy fries!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30676-40513.jpg?ver=14.71',
      name: '2 pc Hot & Crispy Chicken',
      type: 'Non veg',
      serve: '',
      price: '241.00',
      detail: 'Signature Hot & crispy chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30919-40700.jpg?ver=14.71',
      name: '2 pc Smoky Red Chicken',
      type: 'Non veg',
      serve: '',
      price: '261.00',
      detail: 'Spicy, red, grilled chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30673-40510.jpg?ver=14.71',
      name: '6pc Boneless Chicken strips',
      type: 'Non veg',
      serve: '',
      price: '272.00',
      detail: 'Tender, juicy, signature boneless chicken strips',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32229-41485.jpg?ver=14.71',
      name: '4pc Hot Chicken Wings',
      type: 'Non veg',
      serve: '',
      price: '173.00',
      detail: 'Seasoned, signature KFC chicken wings',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30677-40514.jpg?ver=14.71',
      name: '1 pc Hot & Crispy Chicken',
      type: 'Non veg',
      serve: '',
      price: '121.00',
      detail: 'Signature Hot & crispy chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30913-40694.jpg?ver=14.71',
      name: '1 Pc Smoky Red Chicken',
      type: 'Non veg',
      serve: '',
      price: '131.00',
      detail: 'Spicy, red, grilled chicken',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30674-40511.jpg?ver=14.71',
      name: '3pc Boneless Chicken strips',
      type: 'Non veg',
      serve: '',
      price: '173.00',
      detail: 'Tender, juicy, signature boneless chicken strips',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31388-41030.jpg?ver=14.71',
      name: '2 pc Veg Patty',
      type: 'Veg',
      serve: '',
      price: '163.00',
      detail: 'Delicious, crispy, veg add-on!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32290-41502.jpg?ver=14.71',
      name: 'Tandoori Masala Dip',
      type: 'Veg',
      serve: '',
      price: '30.00',
      detail: 'Special tandoori flavored dip, to add a twist to your meal!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-32291-0.jpg?ver=14.71',
      name: 'Pack of 4 Dips',
      type: 'Veg',
      serve: '',
      price: '115.00',
      detail: 'Adding dips is always a good idea!',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31747-0.jpg?ver=14.71',
      name: 'Pack of 2 Dips',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: 'Adding dips is always a good idea!',
    },
  ];

  var beverages_data = [
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-30683-40520.jpg?ver=14.71',
      name: 'Pepsi PET',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: 'Pepsi Pet Bottle',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31373-41015.jpg?ver=14.71',
      name: 'Pepsi Can 330 ml',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: 'Pepsi Can 330 ml',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31374-41016.jpg?ver=14.71',
      name: '7UP Can 330 ml',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: '7UP Can 330 ml',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31376-41018.jpg?ver=14.71',
      name: 'Pepsi Black Can 330 ml',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: 'Pepsi Black Can 330 ml',
    },
    {
      image:
        'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/A-31375-41017.jpg?ver=14.71',
      name: 'Mirinda Can 330 ml',
      type: 'Veg',
      serve: '',
      price: '60.00',
      detail: 'Mirinda Can 330 ml',
    },
  ];

  localStorage.setItem('products', JSON.stringify(matchDay_data));

  displaymd(matchDay_data);
  displaycb(chickenBucket_data);
  displaybb(biryaniBucket_data);
  displaybm(boxMeal_data);
  displaybr(burger_data);
  displaysh(stayHomeSpecial_data);
  displaysn(snacks_data);
  displaybv(beverages_data);

  function displaymd(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#mdproducts').append(card);
    });
  }

  function displaycb(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#cbproducts').append(card);
    });
  }

  function displaybb(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#bbproducts').append(card);
    });
  }

  function displaybm(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#bmproducts').append(card);
    });
  }

  function displaybr(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      dot.className = 'dot';
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#brproducts').append(card);
    });
  }

  function displaysh(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#shproducts').append(card);
    });
  }

  function displaysn(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
      });

      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#snproducts').append(card);
    });
  }

  function displaybv(data) {
    data.forEach(function (elem) {
      var card = document.createElement('div');
      card.className = 'card';

      var img = document.createElement('img');
      img.src = elem.image;
      img.className = 'img';

      var imgdiv = document.createElement('div');
      imgdiv.append(img);
      imgdiv.className = 'imgdiv';
      // content div elements

      var mdname = document.createElement('h3');
      mdname.innerText = elem.name;
      mdname.className = 'name';

      var dot = document.createElement('span');
      dot.className = 'dot';
      dot.innerHTML = '&#8226;';

      var mdtype = document.createElement('p');
      mdtype.innerText = elem.type;

      var mdserve = document.createElement('p');
      mdserve.innerText = elem.serve;

      var stdiv = document.createElement('div');
      stdiv.append(dot, mdtype, mdserve);
      stdiv.className = 'stdiv';

      var mdprice = document.createElement('h3');
      mdprice.innerText = '₹' + Number(elem.price);
      mdprice.className = 'price';

      var mddetail = document.createElement('p');
      mddetail.innerText = elem.detail;
      mddetail.className = 'desc';

      var button = document.createElement('button');
      button.className = 'addCartbtn';
      button.innerText = 'Add to Cart';
      button.addEventListener('click', function () {
        addToCart(elem);
        console.log(button.innerText)
      });
      
      
      var contentdiv = document.createElement('div');
      contentdiv.append(mdname, stdiv, mdprice, mddetail);
      contentdiv.className = 'contentdiv';

      card.append(imgdiv, contentdiv, button);

      document.querySelector('#bvproducts').append(card);
    });
  }
  // Add to Cart Function
  function addToCart(item) {
    if (kfcCartData.length == 0) {
      item["count"] = 1;
      kfcCartData.push(item);
      document.querySelector('#cartvalue').innerText = kfcCartData.length;
      
      addedPrice += Number(item.price);
      totalItem++;
      localStorage.setItem('totalItem', JSON.stringify(totalItem));
      localStorage.setItem('addedPrice', JSON.stringify(addedPrice));

      localStorage.setItem('kfc-cart', JSON.stringify(kfcCartData));
      
    }
    let exist = kfcCartData.filter(function (ele) {
      return item.name == ele.name;
    });
    // console.log(exist);
    if (exist.length == 0) {
      item["count"] = 1;
      kfcCartData.push(item);
      addedPrice += Number(item.price);
      totalItem++;
      localStorage.setItem('totalItem', JSON.stringify(totalItem));
      document.querySelector('#cartvalue').innerText = kfcCartData.length;
      console.log(addedPrice);
      localStorage.setItem('addedPrice', JSON.stringify(addedPrice));
      localStorage.setItem('kfc-cart', JSON.stringify(kfcCartData));
      
      alert('Item added Successfully');
    } else {
      alert('Already added');
    }

    // console.log(kfcCartData);
  }

