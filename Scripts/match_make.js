async function match_make() {
    var username = [document.getElementById('player_info1').getAttribute('data-value'),document.getElementById('player_info2').getAttribute('data-value')]
    var player_score_container = document.createElement('div')
    formatObj = new Intl.NumberFormat('en-US')
    var input_container = document.getElementById("input_container")
    var load_anime = document.createElement('img')
    load_anime.setAttribute('src','/Instagram-profile-fighting/images/load_anime.svg')
    var load_anime_div = document.createElement('div')
    load_anime_div.appendChild(load_anime)
    input_container.innerHTML = load_anime_div.innerHTML

    for(var i=0;i<2;i++){
        var s_url = "https://www.instagram.com/"+username[i]+"/?__a=1"
        var result
        await fetch(s_url).then(response => response.json()).then(data => result=data);

        var player_div_tag = document.createElement('div')
        var username_tag = document.createElement('p')
        var img_tag = document.createElement('img')
        var posts_count = document.createElement('p')
        var follow_count = document.createElement('p')
        var followed_by_count = document.createElement('p')
        var total_score = document.createElement('p')

        username_tag.innerHTML = result.graphql.user.username
        img_tag.setAttribute('src',result.graphql.user.profile_pic_url_hd)
        posts_count.innerHTML = 'Number of posts : ' + formatObj.format(result.graphql.user.edge_owner_to_timeline_media.count)
        follow_count.innerHTML = 'Following : ' + formatObj.format(result.graphql.user.edge_follow.count)
        followed_by_count.innerHTML = 'Followers : ' + formatObj.format(result.graphql.user.edge_followed_by.count)
        total_score.innerHTML = 'Total Score : ' + formatObj.format((result.graphql.user.edge_owner_to_timeline_media.count+result.graphql.user.edge_follow.count+result.graphql.user.edge_followed_by.count))

        player_div_tag.appendChild(username_tag)
        player_div_tag.appendChild(img_tag)
        player_div_tag.appendChild(posts_count)
        player_div_tag.appendChild(follow_count)
        player_div_tag.appendChild(followed_by_count)
        player_div_tag.appendChild(total_score)

        player_score_container.appendChild(player_div_tag)
    }
    input_container.innerHTML = player_score_container.innerHTML
}