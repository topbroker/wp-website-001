@if(!empty($logos))
    <div class="section-logos my-70px">
        <div class="container">
            <div class="section-heading">
                <div class="section-heading-title-wrap">
                    <h2 class="section-heading-title">Mumis pasitiki</h2>
                </div>
            </div>
            <div class="swiper-container swiper-container-logos">
                <div class="swiper-wrapper">
                    @foreach($logos as $logo)
                        <div class="swiper-slide">
                            <img src="{{ $logo }}" alt="">
                        </div>
                    @endforeach
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
@endif
