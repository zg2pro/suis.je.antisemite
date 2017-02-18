<h1 class="question">
    <%= statement %>
</h1>
<div class="panel-group propositions" role="tablist" aria-multiselectable="true">
    <% _.each(propositions, function(i, ind) { %>
    <div class="panel panel-default">
        <div class="panel-heading" role="tab">
            <h4 class="panel-title">
                <a class="reply" role="button" href="#" aria-expanded="true">
                    <%= i.ct %>
                </a>
            </h4>
        </div>
    </div>
    <% }); %>
</div>
<div class="row actions">
    <button class="btn btn-default next hide" type="button">Suivant</button>
</div>
