# trav-wizard

Componente CSS com a finalidade de agilizar Wizards

## Uso
Primeiro deve-se acrescentar os links para o bootstrap, tanto Javascript como css, e também o css do travwizard.

```html
<head>
    .
    .
    .
    <script src="../external/bootstrap/dist/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" href="../external/bootstrap/dist/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="../src/css/trav-wizard.css"/>
</head>
```
Configuradas as chamadas vem o mais importante para o uso que é estruturar bem o HTML, como segue:

```html

<div class="wizard">
    <div class="wizard-inner">
        <div class="connecting-line"></div>
        <ul class="nav nav-tabs" role="tablist">

            <li role="presentation" class="active">
                <a href="#Passo1" data-toggle="tab" aria-controls="Passo1" role="tab" title="Passo 1">
                    <span class="round-tab">
                        <i class="glyphicon glyphicon-folder-open"></i>
                    </span>
                </a>
            </li>
                .
                .
                .                   
        </ul>
    </div>
    <form role="form">
        <div class="tab-content">
            <div class="tab-pane active" role="tabpanel" id="Passo1">
                <h3>Passo 1</h3>
                <p>Conteudo Primeiro Passo </p>

                <ul class="list-inline pull-right">
                    <li><button type="button" class="btn btn-default prev-step">Anterior</button></li>
                    <li><button type="button" class="btn btn-primary next-step">Salvar e continuar</button></li>
                </ul>
            </div>     
            .
            .
            .                       
            <div class="clearfix"></div>
        </div>
    </form>
</div>
```

O bloco **ul.nav-tabs** poderá conter N seletores, como se fossem abas que deverão estar linkados aos seus devidos conteiner no bloco **div.tab-pane**.

Caso se queira uma ação de next e prev, sugere-se o uso de jquery com a action que segue.

```javascript
$(function () {
    $('.next-step').click(function () {
        $('.wizard .nav-tabs li.active').next().find('a[data-toggle="tab"]').click();
    });

    $('.prev-step').click(function () {
        $('.wizard .nav-tabs li.active').prev().find('a[data-toggle="tab"]').click();
    });
});
```

