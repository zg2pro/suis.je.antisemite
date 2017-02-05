<div class="row question">
    <%= statement %>
</div>
<div class="row propositions">
    <ul>
        <% _.each(propositions, function(i) { %>  
        <li><%= i %></li> 
        <% }); %>
    </ul>
</div>
<div class="row actions">
    <button class="btn btn-default next" type="button">Suivant</button>
</div>
