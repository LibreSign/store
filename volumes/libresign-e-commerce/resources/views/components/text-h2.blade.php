@props(['value'])

<h2 {{ $attributes->merge(['class' => 'mb-4 text-center block font-semibold text-xl text-gray-700 dark:text-gray-300']) }}>
    {{ $value ?? $slot }}
</h2>
