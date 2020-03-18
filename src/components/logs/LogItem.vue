<template lang="pug">
.log-item
	span.flex-fill {{ log.last_seen_at }}
	span.flex-fill {{ log.subject }}
	span.flex-fill {{ log.experiment }}
	span.flex-fill {{ log.cohort }}
	span.flex-fill {{ log.type }}
	span.flex-fill {{ log.value }}
	span.flex-fill {{ log.id }}
</template>

<script>
export default {
	name: 'LogItem',
	props: {
		'log': Object
	}
}
</script>

<style lang='sass' scoped=true>
</style>
