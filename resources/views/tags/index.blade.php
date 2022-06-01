@if(isset($colors))
    <div
        data-color-swatch-name="{{ $name ?? '' }}"
        data-color-swatch-key="{{ $key ?? '' }}"
        class="flex justify-center items-stretch"
        style="border: 1px solid;width: 30px;height: 30px;margin-right: 10px;"
    >
        @php
            $colorWidths = (count($colors) <= 1) ? '100%' : (100 / count($colors)) . '%';
        @endphp
        @foreach($colors as $key => $color)
            <div style="height: 28px; width: {{ $colorWidths }}; background-color: {{ $color }}"></div>
        @endforeach
    </div>
@else
    <p>no</p>
@endif
