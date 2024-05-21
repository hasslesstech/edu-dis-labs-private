# Тестування працездатності системи

## Передумови
1. Налаштування віртуального середовища
```bash
python3 -m venv .
source bin/activate.fish
pip3 install flask mariadb
```

2. Запуск сервера:
```bash
flask --app server run
```

## Тестування компонентів

Система має два варіанти передачі індексів: у рядку шляху або в тілі запиту. Перевіримо, як працюють обидва варіанти.

### /api/survey

Цей шлях дозволяє використовувати всі 4 HTTP-методи, що використовуються в домовленості REST (GET, POST, PUT, DELETE).
Протестуємо кожен з них на практичному прикладі:

<pre style="
    color: #ffffff;
    font-size: 10pt;"
>
<span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 1&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>10<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 2&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-X</span><span style="color:dimgray;"></span> <span style="color:aqua;">POST</span><span style="color:dimgray;"></span> <span style="color:aqua;">-d</span><span style="color:dimgray;"></span> <span style="color:yellow;">'{&quot;isPaused&quot;: false, &quot;isNamed&quot;: true, &quot;name&quot;: &quot;Test 3&quot;, &quot;duration&quot;: &quot;1w&quot;, &quot;account_id&quot;: 2}'</span><span style="color:dimgray;"></span> <span style="color:aqua;">--header</span><span style="color:dimgray;"></span> <span style="color:yellow;">&quot;Content-Type: application/json&quot;</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span>
{&quot;success&quot;: true}
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 1&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>10<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 2&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>12<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 3&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>2<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-X</span><span style="color:dimgray;"></span> <span style="color:aqua;">PUT</span><span style="color:dimgray;"></span> <span style="color:aqua;">-d</span><span style="color:dimgray;"></span> <span style="color:yellow;">'{&quot;id&quot;: 8, &quot;isPaused&quot;: true, &quot;isNamed&quot;: true, &quot;name&quot;: &quot;Test 3&quot;, &quot;duration&quot;: &quot;4w&quot;, &quot;account_id&quot;: 2}'</span><span style="color:dimgray;"></span> <span style="color:aqua;">--header</span><span style="color:dimgray;"></span> <span style="color:yellow;">&quot;Content-Type: application/json&quot;</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span>
{&quot;success&quot;: true}
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 1&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>10<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 2&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>12<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 3&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;4w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>2<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-X</span><span style="color:dimgray;"></span> <span style="color:aqua;">DELETE</span><span style="color:dimgray;"></span> <span style="color:aqua;">-d</span><span style="color:dimgray;"></span> <span style="color:yellow;">'{&quot;id&quot;: 12}'</span><span style="color:dimgray;"></span> <span style="color:aqua;">--header</span><span style="color:dimgray;"></span> <span style="color:yellow;">&quot;Content-Type: application/json&quot;</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span>
[{'id': 12, 'isPaused': 1, 'isNamed': 1, 'name': 'Test 3', 'duration': '4w', 'account_id': 2}]
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/demo</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 1&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>10<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 2&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
</pre>

### /api/survey/\<id\>

У цьому випадку доступні лише 3 методи (GET, PUT, DELETE), оскільки під час створення нового опитування його ідентифікатор визначається безпосередньо базою даних.

<pre style="
    color: #ffffff;
    font-size: 10pt;"
>
<span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/restful-server</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 1&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>10<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">,
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>0<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 3&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;1w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/restful-server</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-X</span><span style="color:dimgray;"></span> <span style="color:aqua;">PUT</span><span style="color:dimgray;"></span> \
<span style="color:aqua;">-d</span><span style="color:dimgray;"></span> <span style="color:yellow;">'{&quot;isPaused&quot;: true,
&quot;isNamed&quot;: true,
&quot;name&quot;: &quot;Test 4&quot;,
&quot;duration&quot;: &quot;2w&quot;}'</span><span style="color:dimgray;"></span> \
<span style="color:aqua;">--header</span><span style="color:dimgray;"></span> <span style="color:yellow;">&quot;Content-Type: application/json&quot;</span><span style="color:dimgray;"></span> \
<span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey/4 </span>
{&quot;success&quot;: true}
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/restful-server</span> (master)&gt; </span><span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-s</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey/4</span><span style="color:dimgray;"></span> <span style="color:lime;">|</span><span style="color:dimgray;"></span> <span style="color:#3333FF;">jq</span><span style="color:dimgray;"></span> <span style="color:aqua;">.</span><span style="color:dimgray;"></span>
<span style="font-weight:bold;">[
  {
    </span><span style="font-weight:bold;color:#3333FF;">&quot;id&quot;</span><span style="font-weight:bold;">: </span>4<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isPaused&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;isNamed&quot;</span><span style="font-weight:bold;">: </span>1<span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;name&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;Test 4&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;duration&quot;</span><span style="font-weight:bold;">: </span><span style="color:lime;">&quot;2w&quot;</span><span style="font-weight:bold;">,
    </span><span style="font-weight:bold;color:#3333FF;">&quot;account_id&quot;</span><span style="font-weight:bold;">: </span>5<span style="font-weight:bold;">
  }</span><span style="font-weight:bold;">
]</span>
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/restful-server</span> (master)&gt; <span style="color:#3333FF;">curl</span><span style="color:dimgray;"></span> <span style="color:aqua;">-v</span><span style="color:dimgray;"></span> <span style="color:aqua;">-X</span><span style="color:dimgray;"></span> <span style="color:aqua;">DELETE</span><span style="color:dimgray;"></span> <span style="color:aqua;">--header</span><span style="color:dimgray;"></span> <span style="color:yellow;">&quot;Content-Type: application/json&quot;</span><span style="color:dimgray;"></span> <span style="color:aqua;">-d</span><span style="color:dimgray;"></span> <span style="color:yellow;">'{}'</span><span style="color:dimgray;"></span> <span style="color:aqua;">http://127.0.0.1:5000/api/survey/4 </span>
*   Trying 127.0.0.1:5000...
* Connected to 127.0.0.1 (127.0.0.1) port 5000 (#0)
&gt; DELETE /api/survey/4 HTTP/1.1
&gt; Host: 127.0.0.1:5000
&gt; User-Agent: curl/7.88.1
&gt; Accept: */*
&gt; Content-Type: application/json
&gt; Content-Length: 2
&gt; 
&lt; HTTP/1.1 200 OK
&lt; Server: Werkzeug/3.0.3 Python/3.11.2
&lt; Date: Tue, 21 May 2024 14:45:09 GMT
&lt; Content-Type: text/html; charset=utf-8
&lt; Content-Length: 94
&lt; Connection: close
&lt; 
[{'id': 4, 'isPaused': 1, 'isNamed': 1, 'name': 'Test 4', 'duration': '2w', 'account_id': 5}]
* Closing connection 0
<span style="color:dimgray;"></span><span style="filter: contrast(70%) brightness(190%);color:lime;">user</span>@debian-laptop <span style="color:lime;">~/D/f/t/f/d/m/e/s/restful-server</span> (master)&gt;
</pre>

Бачимо, що ми можемо отримувати інформацію про окремі опитування, змінювати та видаляти їх.