<template>
    <div class="show">
        <a :href="link" :title="eventTitle" target="_blank">
            <div class="show-container">
                <div class="circle-plus">
                    <span>+</span>
                </div>
                <div class="show-info">
                    <div class="top">
                        <div class="date">{{ date }}</div>
                        <div class="slant"></div>
                    </div>
                    <div class="bottom">
                        <span class="venue">{{ venue }}</span>
                        <span class="time">{{ time }}</span>
                        <span class="event">View Event 
                            <span>
                                <img src="../assets/arrow-right.svg" alt="" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  eventTitle: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}

.show {
    :hover .show-container .top, 
    :hover .show-container .bottom,
    :hover .show-container .slant,
    :hover .show-container .circle-plus {
        background-color: #ffd4ec;
        zoom: 1.06;
    }

    :hover .show-container .circle-plus {
        animation: spin .5s linear 1;
    }
    a {
        color: var(--brand-dark);
        text-decoration: none;
    }

    .show-container {
        width: 100%;
        font-weight: bolder;
        margin: 1rem 0;
        display: flex;

        .circle-plus {
            text-align: center;
            border: 8px solid var(--brand-alt);
            height: 40px;
            align-self: end;
            margin: 6px 6px;
            border-radius: 100%;
            font-weight: bolder;
            color: var(--brand-alt);
            width: 40px;
            min-width: 40px;
            font-size: 24px;

            span {
                width: 100%;
                position: relative;
                display: block;
                height: 100%;
                line-height: normal;
                margin-top: -4px;
            }
        }

        .show-info {
            width: 90%;
        }

        div.top, div.bottom {
            background-color: #f7b5d5;
        }

        .top {
            width: fit-content;
            padding: 0 0 0 1rem;
            display: flex;

            .date {
                background-color: none;
                padding-top: 8px;
            }
        }

        .slant {
            width: 41.45px;
            height: 59.45px;
            background-color: #f7b5d5;
            transform-origin: top right;
            transform: rotate(-45deg);
            z-index: 1;
        }

        .bottom {
            padding: 0.4rem 1rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 6px solid var(--brand-alt);
            margin-top: -18px;

            .time {
                text-align: center;
            }

            .event {
                text-align: right;

                span {
                    font-weight: bolder;
                    position: absolute;
                    margin-left: 8px;
                    width: 30px;

                    img {
                        width: 100%;
                    }
                }
            }
        }

        .bottom > * {
            flex: 1;
            z-index: 2;
        }
    }
}
</style>