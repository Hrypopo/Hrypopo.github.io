/* AETHER document behaviours — reading progress + TOC scroll-spy.
   Shared by the production-depth volumes. Zero-dependency. */
(function(){
  var prog=document.getElementById('prog');
  function onScroll(){
    if(!prog) return;
    var h=document.documentElement, max=h.scrollHeight-h.clientHeight;
    prog.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
  }
  addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var links=[].slice.call(document.querySelectorAll('.toc a'));
  if(!links.length) return;
  var map={}; links.forEach(function(a){ map[a.getAttribute('href').slice(1)]=a; });
  var spy=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){
        links.forEach(function(l){ l.classList.remove('active'); });
        var a=map[e.target.id]; if(a) a.classList.add('active');
      }
    });
  },{rootMargin:'-20% 0px -70% 0px'});
  [].slice.call(document.querySelectorAll('.sec')).forEach(function(s){ spy.observe(s); });
})();
