function createContacts() {
    var contacts = [
        {
        	'name': 'Alex Alexis',
        	'image': 'https://randomuser.me/api/portraits/women/56.jpg',
        	'last_chat': [
        		{
        			'date': '9:15 AM',
        			'message': 'Lorem ipsum dolorsit amet consectetur adipisicing elit',
        		}
        	]
        },
        {
        	'name': 'Ramon Reed',
        	'image': 'https://randomuser.me/api/portraits/women/59.jpg',
        	'last_chat': [
        		{
        			'date': '9:15 AM',
        			'message': 'Lorem Hello!',
        		}
        	]
        },
        {
        	'name': 'Eli Barrett',
        	'image': 'https://randomuser.me/api/portraits/women/58.jpg',
        	'last_chat': [
				{
					'date': '8:55 PM',
					'message': 'Lorem ipsum dolorsit ...',
				}
        	]
        },
	]

	var lis = ''

	contacts.forEach((c, index) => {
		lis += `<li class="p-2 card mt-2" onclick='changeContact(${index})'>
			<div class="card-body">
				<div class="d-flex">
					<div>
						<img class="rounded-pill me-3" width="60"
							src="${c.image}">
					</div>
					<div>
						<p class="fw-bold mb-0 text-light">${c.name}</p>
						<p class="small text-muted">${c.last_chat[0]['message']}</p>
					</div>
					<div>
						<p class="small text-muted">${c.last_chat[0]['date']}</p>
						<span class="badge bg-danger rounded-pill float-end">1</span>
					</div>
				</div>
			</div>
		</li>`
	})
	document.querySelector('.contact').innerHTML = lis;
}
createContacts()

function createChats() {
	var chats = [
		{
			'user': {
				'name': 'Alex Alexis',
				'image': 'https://randomuser.me/api/portraits/women/56.jpg',
			},
			'chat':
			{
				'date': '9:15 AM',
				'message': 'Lorem ipsum dolor sitamet consectetur adipisicing elit. Doloribus   reprehenderit voluptatibus cumque, deserunt deleniti   consequatur adipisci nisi consequuntur sunt itaque?   Sunt aspernatur, ratione labore ipsam enim unde itaque   dolorum magni?',
			}
		},
		{
			'user': {
				'name': 'Eli Barrett',
				'image':'https://randomuser.me/api/portraits/women/58.jpg',
			},
			'chat':
			{
				'date': '9:50 AM',
				'message': 'Lorem ipsum dolor sit				amet consectetur adipisicing elit. Doloribusreprehenderit voluptatibus cumque, deserunt deleniticonsequatur adipisci nisi consequuntur sunt itaque?Sunt aspernatur, ratione labore ipsam enim unde itaquedolorum magni?',
			}
		},
	]
	var lis = ''

	if (chats.length == 0)
		lis += `  <div class="d-flex chat">
		<div class="w-75 ">
			<div class="card bg-dark">
				<div class="card-body text-light">
					<h3 class='text-center'>No message</h3>
				</div>
			</div>
		</div>
	</div>`
	else
		chats.forEach((c) => {
			lis += `  <div class="d-flex chat">
		<div class="w-75 ">
			<div class="card bg-dark">
				<div class="card-body text-light">
					${c.chat.message}
				</div>
			</div>
			<p class="small text-muted float-end">${c.chat.date}</p>
		</div>
		<div class="w-25 d-flex align-items-end">
			<img class="rounded-pill ms-3 avatar" src="${c.user.image}"/>
		</div>
	</div>`
		})

	document.querySelector('.chats').innerHTML = lis;
}
createChats()
				